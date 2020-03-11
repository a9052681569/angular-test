import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


import { UserlistComponent } from './userlist/userlist.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { UserPageGuard } from './user-page/user-page.guard'




const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'userlist', component: UserlistComponent},
  { path: 'countries', loadChildren: () => import('./countries/countries.module').then(m => m.CountriesModule)},
  { path: 'user-page', loadChildren: () => import('./user-page/user-page.module').then(m => m.UserPageModule), canActivate: [UserPageGuard], canDeactivate: [UserPageGuard], canLoad: [UserPageGuard]},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [UserPageGuard]
})
export class AppRoutingModule { }

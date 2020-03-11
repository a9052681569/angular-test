import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


import { UserlistComponent } from './userlist/userlist.component';
import { CountriesComponent } from './countries/countries.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { UserPageGuard } from './user-page/user-page.guard'




const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'userlist', component: UserlistComponent},
  { path: 'countries', component: CountriesComponent},
  { path: 'user-page', loadChildren: './user-page/user-page.module#UserPageModule', canActivate: [UserPageGuard], canDeactivate: [UserPageGuard], canLoad: [UserPageGuard]},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [UserPageGuard]
})
export class AppRoutingModule { }

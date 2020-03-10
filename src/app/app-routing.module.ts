import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { UserlistComponent } from './userlist/userlist.component';
import { CountriesComponent } from './countries/countries.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UserPageInfoComponent } from './user-page/user-page-info/user-page-info.component';
import { UserPageStateComponent } from './user-page/user-page-state/user-page-state.component';
import { UserPageGuard } from './user-page/user-page.guard'



const userPageRoutes: Routes = [
  { path: 'user-page-info', component: UserPageInfoComponent},
  { path: 'user-page-state', component: UserPageStateComponent}
]


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'userlist', component: UserlistComponent},
  { path: 'countries', component: CountriesComponent},
  { path: 'user-page', component: UserPageComponent, children: userPageRoutes, canActivate: [UserPageGuard], canDeactivate: [UserPageGuard]},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [UserPageGuard]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { UserlistComponent } from './components/userlist/userlist.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { UserPageGuard } from './components/user-page/user-page.guard'




const routes: Routes = [
  { path: '', component: HomeComponent, data: {animation: ''}},
  { path: 'userlist', component: UserlistComponent, data: {animation: 'userlist'}},
  { path: 'countries', loadChildren: () => import('./components/countries/countries.module').then(m => m.CountriesModule), data: {animation: 'countries'}},
  { path: 'user-page', loadChildren: () => import('./components/user-page/user-page.module').then(m => m.UserPageModule), canLoad: [UserPageGuard], data: {animation: 'user-page'}},
  { path: 'swiper', loadChildren: () => import('./components/swiper/swiper.module').then(m => m.SwiperModule), data: {animation: 'swiper'}},
  { path: 'gh-search', loadChildren: () => import('./components/gh-search/gh-search.module').then(m => m.GhSearchModule), data: {animation: 'gh-search'}},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [UserPageGuard]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { UserlistComponent } from './components/userlist/userlist.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { UserPageGuard } from './components/user-page/user-page.guard'




const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'userlist', component: UserlistComponent},
  { path: 'countries', loadChildren: () => import('./components/countries/countries.module').then(m => m.CountriesModule)},
  { path: 'user-page', loadChildren: () => import('./components/user-page/user-page.module').then(m => m.UserPageModule), canLoad: [UserPageGuard]},
  { path: 'swiper', loadChildren: () => import('./components/swiper/swiper.module').then(m => m.SwiperModule)},
  { path: 'gh-search', loadChildren: () => import('./components/gh-search/gh-search.module').then(m => m.GhSearchModule)},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [UserPageGuard]
})
export class AppRoutingModule { }

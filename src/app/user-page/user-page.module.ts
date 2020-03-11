import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UserPageComponent } from './user-page.component';
import { UserPageInfoComponent } from './user-page-info/user-page-info.component';
import { UserPageStateComponent } from './user-page-state/user-page-state.component';


const userPageChildRoutes: Routes = [
  { path: 'user-page-info', component: UserPageInfoComponent},
  { path: 'user-page-state', component: UserPageStateComponent}
]

const userPageRoutes: Routes = [
  { path: '', component: UserPageComponent, children: userPageChildRoutes},
  
]

@NgModule({
  declarations: [
    UserPageComponent,
    UserPageInfoComponent,
    UserPageStateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(userPageRoutes)
  ]
})
export class UserPageModule { }

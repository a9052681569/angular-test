import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UserPageComponent } from './user-page.component';
import { UserPageInfoComponent } from './user-page-info/user-page-info.component';
import { UserPageStateComponent } from './user-page-state/user-page-state.component';
import { UserPageGuard } from './user-page.guard';



const userPageChildRoutes: Routes = [
  { path: 'user-page-info', component: UserPageInfoComponent},
  { path: 'user-page-state', component: UserPageStateComponent}
]

const userPageRoutes: Routes = [
  { path: '', component: UserPageComponent, children: userPageChildRoutes, canDeactivate: [UserPageGuard], canActivate: [UserPageGuard]},
  
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
  ],
  providers: [UserPageGuard]
})
export class UserPageModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { GhSearchComponent } from './gh-search.component';
import { from } from 'rxjs';


const routes: Routes = [
  {path: '', component: GhSearchComponent}
];

@NgModule({
  declarations: [GhSearchComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ]
})
export class GhSearchModule { }

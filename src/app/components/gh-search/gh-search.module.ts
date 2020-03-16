import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GhSearchComponent } from './gh-search.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {path: '', component: GhSearchComponent}
]

@NgModule({
  declarations: [GhSearchComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class GhSearchModule { }

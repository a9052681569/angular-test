import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NamePipe } from './name/name.pipe';
import { SortByStarsPipe } from './sort-by-stars/sort-by-stars.pipe';



@NgModule({
  declarations: [
    NamePipe,
    SortByStarsPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NamePipe,
    SortByStarsPipe
  ]
})
export class PipesModule { }

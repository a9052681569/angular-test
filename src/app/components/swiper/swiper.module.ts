import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperComponent } from './swiper.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: SwiperComponent}
]

@NgModule({
  declarations: [SwiperComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SwiperModule { }

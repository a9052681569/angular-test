import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CountriesComponent } from './countries.component';
import { PipesModule } from 'src/app/pipes/pipes.module';


const routes: Routes = [
  {path: '', component: CountriesComponent}
];

@NgModule({
  declarations: [CountriesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    PipesModule
  ]
})
export class CountriesModule { }

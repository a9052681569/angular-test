import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { GhSearchComponent } from './gh-search.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RepoCardComponent } from './repo-card/repo-card.component';
import { NoticeDataService } from 'src/app/services/notice-data/notice-data.service';
import { GhSearchService } from 'src/app/services/gh-search/gh-search.service';
import { PipesModule } from 'src/app/pipes/pipes.module';


const routes: Routes = [
  {path: '', component: GhSearchComponent}
];

@NgModule({
  declarations: [GhSearchComponent, RepoCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    PipesModule
  ],
  providers: [GhSearchService, NoticeDataService]
})
export class GhSearchModule { }

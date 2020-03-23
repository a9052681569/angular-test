import { Component, OnInit } from '@angular/core';
import { GhSearchService } from 'src/app/services/gh-search/gh-search.service';
import { opacityChangeAnimation } from 'src/app/animations/opacity-change/opacity-change.animation';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GhSearchState } from 'src/app/types/gh-search-state/gh-search-state';


@Component({
  selector: 'app-gh-search',
  templateUrl: './gh-search.component.html',
  styleUrls: ['./gh-search.component.css'],
  animations: [opacityChangeAnimation]
})
export class GhSearchComponent implements OnInit {

  public searchForm: FormGroup;

  constructor(private searchService: GhSearchService, private formBuilder: FormBuilder) {
    this.searchForm = formBuilder.group({
      request: ''
    });
  }
  public get state(): GhSearchState {
    return this.searchService.getState();
  }

  ngOnInit(): void {
    this.searchService.subscribe(this.searchForm.get('request').valueChanges);
  }
}

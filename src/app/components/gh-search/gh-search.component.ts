import { Component, OnInit } from '@angular/core';
import { fromEvent, of, interval } from 'rxjs';
import { debounceTime, switchMap, debounce } from 'rxjs/operators';

@Component({
  selector: 'app-gh-search',
  templateUrl: './gh-search.component.html',
  styleUrls: ['./gh-search.component.css']
})
export class GhSearchComponent implements OnInit {
  count: number = 0;
  repositories: object[];
  isLoading: boolean;
  isNoSuchRepo: boolean;
  noSuchRepo: string;
  
  getRes(): void {
    fromEvent(document.querySelector('.github-input'), 'input')
    .pipe( 
      debounce(() => {
        this.isLoading = true
        return interval(500)
      }), 
      switchMap((event: KeyboardEvent) => {
      if((event.target as HTMLInputElement).value !== '') {
        return fetch(`https://api.github.com/search/repositories?q=${(event.target as HTMLInputElement).value}`)
        .then(res => res.ok? res.json() : Promise.reject(res.status))
      } else {
        return of(null)
      }
    }))
    .subscribe(res => {
      this.isLoading = false
      if(res !== null) {
        res.total_count > 0 ? this.isNoSuchRepo = false : this.isNoSuchRepo = true
        this.count = res.total_count
        this.repositories = res.items
      } else {
        this.repositories.splice(0)
        this.count = 0
      }
      
    })
    
  }
  constructor() { }

  ngOnInit(): void {
    this.getRes()
  }

}

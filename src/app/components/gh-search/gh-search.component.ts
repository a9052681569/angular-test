import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent, of, interval } from 'rxjs';
import { switchMap, debounce } from 'rxjs/operators';

@Component({
  selector: 'app-gh-search',
  templateUrl: './gh-search.component.html',
  styleUrls: ['./gh-search.component.css']
})
export class GhSearchComponent implements AfterViewInit {
  @ViewChild('searchInput') 
  searchinput: ElementRef

  public count: number = 0;
  public repositories: object[];
  public isLoading: boolean;
  public isNoSuchRepo: boolean;
  
  private getRes(): void {
    fromEvent(this.searchinput.nativeElement, 'input')
    .pipe( 
      debounce(() => {
        this.isLoading = true
        return interval(500)
      }), 
      switchMap((event: KeyboardEvent) => {
      if((event.target as HTMLInputElement).value !== '') {
        return fetch(`https://api.github.com/search/repositories?q=${(event.target as HTMLInputElement).value}`)
        .then(res => res.ok? res.json() : Promise.reject(res.status))
        .catch(err => console.log(err))
      } else {
        return of(null)
      }
    }))
    .subscribe(res => {
      this.isLoading = false
      if(res && res !== null) {
        res.total_count > 0 ? this.isNoSuchRepo = false : this.isNoSuchRepo = true
        this.repositories = res.items
        this.count = res.total_count
      } else {
        this.repositories = []
        this.count = 0
      }
      
    })
    
  }

  ngAfterViewInit(): void {
    this.getRes()
  }

}

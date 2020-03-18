import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent, of, interval } from 'rxjs';
import { switchMap, debounce } from 'rxjs/operators';
import { GhSearchService } from 'src/app/services/gh-search/gh-search.service';
import { opacityChangeAnimation } from 'src/app/animations/opacity-change/opacity-change.animation';


@Component({
  selector: 'app-gh-search',
  templateUrl: './gh-search.component.html',
  styleUrls: ['./gh-search.component.css'],
  providers: [GhSearchService],
  animations: [opacityChangeAnimation]
})
export class GhSearchComponent implements AfterViewInit {
  @ViewChild('searchInput') 
  searchInput: ElementRef

  public count: number = 0;
  public repositories: object[];
  public isLoading: boolean;
  public requestErrMessage: string = 'Ошибка'
  public isRequestErr: boolean
  
  constructor(private searchService: GhSearchService) {}
  private resReset(): void {
    this.repositories = []
    this.count = 0
  }
  private getRes(): void {
    fromEvent(this.searchInput.nativeElement, 'input')
    .pipe( 
      debounce(() => {
        this.isLoading = true
        return interval(500)
      }), 
      switchMap((event: KeyboardEvent) => {
        const value: string = (event.target as HTMLInputElement).value
        if(value !== '') {
          return this.searchService.repoRequest(value)
        } else {
          return of(null)
        }
      })
    )
    .subscribe(res => {
      this.isLoading = false
      if(res && res !== null) {
        this.isRequestErr = res.total_count > 0 ?  false : true
        this.requestErrMessage = this.isRequestErr ? 'не нашлось репозиториев с таким названием': ''
        this.repositories = res.items
        this.count = res.total_count
      } else {
        this.isRequestErr = true
        this.requestErrMessage = 'запрос то введи'
        this.resReset()
      }
    }, err => {
      console.log(err)
      this.isLoading = false
      this.isRequestErr = true
      this.requestErrMessage = 'слишком много запросов, братишка - сходи перекури'
      this.resReset()
    })
    
  }

  ngAfterViewInit(): void {
    this.getRes()
  }

}

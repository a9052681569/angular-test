import { Injectable } from '@angular/core';
import { Observable, of, interval } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { distinctUntilChanged, switchMap, debounce } from 'rxjs/operators';
import { GhSearchState } from 'src/app/types/gh-search-state/gh-search-state';
import { NoticeDataService } from '../notice-data/notice-data.service';


@Injectable()
export class GhSearchService {
  private state: GhSearchState = {};

  constructor(private http: HttpClient, private notice: NoticeDataService) {   }

  private sendRequest(repoName: string): Observable<object> {
    return repoName ?
    this.http.get(`https://api.github.com/search/repositories?q=${repoName}`)
    :
    of(this.notice.messages.emptyRequest);
  }

  private changeState(state: GhSearchState): void {
    this.state.isLoading = state.isLoading ? state.isLoading : false;
    this.state.repositories = state.repositories ? state.repositories : [];
    this.state.noticeMessage = state.noticeMessage ? state.noticeMessage : '';
  }

  private eventHandler$(event$: Observable<string>): Observable<{[key: string]: any}> {
    return event$
    .pipe(
      debounce(() => {
        this.changeState({isLoading: true});
        return interval(500);
      }),
      distinctUntilChanged(),
      switchMap((repoName: string) => this.sendRequest(repoName))
    );
  }

  public subscribe(event$: Observable<string>): void {
    this.eventHandler$(event$)
    .subscribe(
      res => {
        console.log(res);
        if (res && typeof res !== typeof this.notice.messages.emptyRequest) {
          res.total_count > 0 ?
          this.changeState({repositories: res.items})
          :
          this.changeState({noticeMessage: this.notice.messages.emptyResponse});
        } else {
          this.changeState({noticeMessage: this.notice.messages.emptyRequest});
        }
      },
      err => {
        console.log(err);
        this.changeState({noticeMessage: this.notice.messages.error});
      }
    );
  }
  public getState() {
    return this.state;
  }
}

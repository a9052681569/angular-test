import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GhSearchService {

  constructor(private http: HttpClient) {   }

  public repoRequest(repoName: string): Observable<object> {
    return this.http.get(`https://api.github.com/search/repositories?q=${repoName}`)
  }
}

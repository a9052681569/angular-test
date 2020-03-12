import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Subscription, Observable } from 'rxjs'
import { User } from '../userlist/user';
import { FunctionLog } from 'src/app/decorators/function-log/function-log';
import { ComponentCanDeactivate } from './user-page.guard';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit, ComponentCanDeactivate {
  private saved: boolean;
  public user: User
  private querySubscription: Subscription
  constructor( private route: ActivatedRoute) {
    this.querySubscription = route.queryParams.subscribe((queryParam: any) => {
      this.user = queryParam
    })
  }
  @FunctionLog
  public someFactAboutUser(name:string, age: number) {
    return `А вы знали, что ${name} уже отметил свой ${age}'й день рождения`
  }
  public canDeactivate(): boolean | Observable<boolean> {
    if (!this.saved) {
      return confirm('Вы закончили с этим пользователем?')
    } else {
      return true
    }
  }
  ngOnInit(): void {
    
  }

}

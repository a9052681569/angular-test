import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs'
import { User } from '../../userlist/user';

@Component({
  selector: 'app-user-page-state',
  templateUrl: './user-page-state.component.html',
  styleUrls: ['./user-page-state.component.css']
})
export class UserPageStateComponent implements OnInit {

  public user: User
  private querySubscription: Subscription
  constructor( private route: ActivatedRoute) {
    this.querySubscription = route.queryParams.subscribe((queryParam: any) => {
      this.user = queryParam
    })
  }
  ngOnInit(): void {
  }

}

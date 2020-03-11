import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs'
import { User } from '../../userlist/user';

@Component({
  selector: 'app-user-page-info',
  templateUrl: './user-page-info.component.html',
  styleUrls: ['./user-page-info.component.css']
})
export class UserPageInfoComponent {

  public user: User
  private querySubscription: Subscription
  constructor( private route: ActivatedRoute) {
    this.querySubscription = route.queryParams.subscribe((queryParam: any) => {
      this.user = queryParam
    })
  }

}

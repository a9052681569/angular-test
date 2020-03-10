import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Subscription, Observable } from 'rxjs'
import { User } from '../userlist/user';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  public saved: boolean = false
  public user: User
  private querySubscription: Subscription
  constructor( private route: ActivatedRoute) {
    this.querySubscription = route.queryParams.subscribe((queryParam: any) => {
      this.user = queryParam
    })
  }
  save() {
    this.saved = true
  }
  canDeactivate(): boolean | Observable<boolean> {
    if (!this.saved) {
      return confirm('Вы закончили с этим пользователемpiter?')
    } else {
      return true
    }
  }
  ngOnInit(): void {
    
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
import { users } from './users';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {
  public users: User[] = users;
  constructor(private router: Router) {}
  public closeUp(user: User) {
    this.router.navigate(['user-page'], {
      queryParams: user
    });
  }
}

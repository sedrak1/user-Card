import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  usersCopy: User[] = [];

  id = 0;
  constructor(private userService: UserService) {}

  getUsers(): void {
    this.userService.getUsers().subscribe((user) => (this.users = user, this.usersCopy=user));
  }

  ngOnInit(): void {
    this.getUsers();
  }

  deleteUser(user: User): void {
    this.usersCopy = this.users.filter((u) => u !== user);
    this.userService.deleteUser(user.id).subscribe();
  }

  search($event: any): void {
    this.usersCopy = this.users.filter((u) =>
      (u.firstName + " " + u.lastName + " " + u.username).toLocaleLowerCase().includes($event.target.value.toLocaleLowerCase())
    );
  }
}
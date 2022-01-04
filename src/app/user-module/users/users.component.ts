import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/user';
import { UserService } from '../services/user.service';
import { UsersRoutingModule } from '../users-routing.module';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  id = 0
  constructor(private userService: UserService) {}

  getUsers(): void {
    this.userService.getUsers().subscribe((user) => (this.users = user));
  }
  ngOnInit(): void {
    this.getUsers();
  }
  deleteUser(user: User): void {
    this.users = this.users.filter((u) => u !== user);
    this.userService.deleteUser(user.id).subscribe();
  }

}
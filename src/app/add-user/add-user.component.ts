import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { UsersComponent } from '../users/users.component';
import {  } from '../app.module';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  users: User[] = [];
  userName: String = '';
  firstName: String = '';
  lastName: String = '';
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  foo() {
    this.add(1,this.userName,this.firstName,this.lastName)
  }
  addUserName($event: any) {
    this.userName = $event.target.value;
  }

  addFirstName($event: any) {
    this.firstName = $event.target.value;
  }

  addLastName($event: any) {
    this.lastName = $event.target.value;
  }

  add(id: Number, username: String, firstName: String, lastName: String): void {
    this.userService
      .addUser({ id, username, firstName, lastName } as User)
      .subscribe((user) => {
        this.users.push(user);
      });
  }
}

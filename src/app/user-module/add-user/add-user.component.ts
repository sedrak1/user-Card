import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { User } from '../../user';
import { UserService } from '../services/user.service';

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
  constructor(private userService: UserService,) {}

  addUserForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    username: new FormControl(''),
  });

  ngOnInit(): void {}

  onSubmit() {
    this.add({ ...this.addUserForm.value, id: 2 });
  }

  add(user: User): void {
    this.userService.addUser(user).subscribe(()=>console.log(RouterLink));
  }
}

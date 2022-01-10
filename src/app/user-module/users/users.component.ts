import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  param: string = location.search;
  searchText: string = ""

  id = 0;
  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  getUsers(): void {
    this.userService
      .getUsers()
      .subscribe((user) => ((this.users = user), (this.usersCopy = user), this.search()));
  }

  ngOnInit(): void {
    this.getUsers();
    this.searchText = this.route.snapshot.queryParams['search'] || ""
  }

  deleteUser(user: User): void {
    this.users = this.users.filter((u) => u !== user);
    this.userService.deleteUser(user.id).subscribe();
  }

  search(): void {
    console.log(1);
    
    this.router.navigate([], {
      queryParamsHandling: 'merge',
      queryParams: { search: encodeURI(this.searchText) },
    });
    this.usersCopy = this.users.filter((u) => {
      return (u.firstName + ' ' + u.lastName + ' ' + u.username)
        .toLowerCase()
        .includes(this.searchText.toLowerCase());
    });
  }
}
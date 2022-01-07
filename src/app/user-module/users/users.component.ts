import { query } from '@angular/animations';
import { parseI18nMeta } from '@angular/compiler/src/render3/view/i18n/meta';
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
  param: string = location.search
  searchText: string = ""

  id = 0;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      
      let date = params['search'];
      console.log(date); // Print the parameter to the console.
    });
  }

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
  
  changeParams(){
    location.href = "users" + this.param + this.searchText
    console.log(location.href);
  }

  search(user: any, ): any {
   
    this.router.navigate(["/mypath"], {
      queryParamsHandling: 'merge',
      queryParams: { search: "Asd" },
      skipLocationChange: true,
    });
    if (
      (user.firstName + ' ' + user.lastName + ' ' + user.username)
        .toLowerCase()
        .includes(this.searchText.toLowerCase())
    ) {
      return true;
    }
    return false;
  }
}
import { query } from '@angular/animations';
import { NgModule, Query, QueryList } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateComponent } from './update-user/update.component';
import { UsersComponent } from './users/users.component';
 
const UsersRouting: Routes = [
  { path: 'users/:?search=', component: UsersComponent },
  { path: 'users/:id', component: UpdateComponent },
  
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(UsersRouting)],
  exports: [RouterModule],
})

export class UsersRoutingModule {}
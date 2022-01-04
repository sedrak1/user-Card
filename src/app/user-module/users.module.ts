import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateComponent } from './update-user/update.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [UsersComponent, UpdateComponent, AddUserComponent],
  imports: [
    UsersRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class UsersModule {}
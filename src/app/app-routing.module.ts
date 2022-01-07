import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './user-module/users/users.component';
import { UsersModule } from './user-module/users.module';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './user-module/add-user/add-user.component';
import { query } from '@angular/animations';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'home', component: HomeComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

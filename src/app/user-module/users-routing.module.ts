import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateComponent } from './update-user/update.component';
 
const UsersRouting: Routes = [
  { path: 'users/:id', component: UpdateComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(UsersRouting)],
  exports: [RouterModule],
})

export class UsersRoutingModule {}
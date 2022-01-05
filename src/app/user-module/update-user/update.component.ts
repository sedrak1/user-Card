import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormArray, FormArrayName, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


import { User } from '../../user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  user: User = { firstName: '', lastName: '', username: '', id: 1 };
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location,
  ) {
    
  }
  profileForm:any


  fields = new FormArray([
    new FormControl('Nancy', Validators.minLength(2)),
    new FormControl('Drew'),
  ]);

  ngOnInit(): void {
    this.getUser();    
  }

  getUser(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.userService.getUser(id).subscribe((user) => {
      this.user = user;
      this.profileForm = new FormGroup({
        firstName: new FormControl(this.user.firstName),
        lastName: new FormControl(this.user.lastName),
        username: new FormControl(this.user.username),
      });
      console.log(this.profileForm.setControl);
    });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    let data = {
      ...this.profileForm.value,
      id: this.user?.id,
    };
    this.userService.updateUser(data).subscribe(() => this.goBack());
  }

  // addFild(){
  //   // this.profileForm.setControl(index: number, control: AbstractControl, options: { emitEvent?: boolean; } = {});
  //   // const arr = new FormArray([new FormControl()], { updateOn: 'blur' });
  //   this.profileForm.controls
  //   console.log(this.profileForm.controls);

  // }
}
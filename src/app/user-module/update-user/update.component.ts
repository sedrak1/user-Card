import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {
  FormArray,
  FormArrayName,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { User } from '../../user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  user: User = { firstName: '', lastName: '', username: '', id: 1 };

  profileForm = this.fb.group({
    username: [this.user.username, Validators.required],
    firstName: [this.user.firstName, Validators.required],
    lastName: [this.user.lastName, Validators.required],
    activities: this.fb.array([]),
  });


  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location,
    private fb: FormBuilder
  ) {}
  initForm(): void {
    this.profileForm = this.fb.group({
      username: [this.user.username, Validators.required],
      firstName: [this.user.firstName, Validators.required],
      lastName: [this.user.lastName, Validators.required],
      otherInfoArr: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.getUser();
    this.initForm()
  }

  getUser(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.userService.getUser(id).subscribe((user) => {
      this.user = user;
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
  get activitiesControls(): FormArray {
    
    return this.profileForm.get('otherInfoArr') as FormArray;
  }

  addField() {
    this.activitiesControls.push(this.fb.control(''));
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
  updateForm: FormGroup;
  user: User;
  submitted: false
  userId: number;
  id: string | null;
  constructor(private formBuilder: FormBuilder,
     private userService: UserService,
     private activateRoute: ActivatedRoute,
     public router: Router
    ) {
    this.updateForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      password:[''],
      gender: [''],
      street: [''],
      address1: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
    })
  }
  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('userId')
    console.log(this.id)
    this.userService.getUserDetailsByUserId(Number(this.id)).subscribe(data=>{
      this.updateForm.patchValue({
        firstName:data.firstName,
        lastName:data.lastName,
        mobileNumber:data.mobileNumber,
        // street:data.street,
        // address1:data.address1,
        // city:data.address1,
        // state:data.state
      })

    })
  }

  updateUserDetails() {
    this.userService.updateUserDetails(this.updateForm.value, Number(this.id))
    .subscribe((data: any) => {
      console.log(data)
      this.router.navigateByUrl("/all-users")
    })
  }

}

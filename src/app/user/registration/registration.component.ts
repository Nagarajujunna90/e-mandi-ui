import { Component } from '@angular/core';
import { User } from '../user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  user: User
  userForm: FormGroup;
  submitted:false
 
  constructor(private formBuilder: FormBuilder,private userService:UserService,private router: Router) {

  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      mobileNumber: ['',Validators.required],
      userName: ['',Validators.required],
      gender: [''],
      street: [''],
      address1: [''],
      city: ['',Validators.required],
      state: ['',Validators.required],
      //password: ['']
    })
  }

  registerUser() {
    console.log(this.userForm.value)
    if (this.userForm.invalid) {
      return;
  }

  this.userService.registerUser(this.userForm.value).subscribe((data)=>{
    console.log(data)
    this.router.navigateByUrl('/registration')
  })
  
}
}

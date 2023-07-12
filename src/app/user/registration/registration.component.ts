import { Component } from '@angular/core';
import { User } from '../user';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
user:User
userForm: FormGroup;
constructor(private formBuilder:FormBuilder){

}

ngOnInit(){
this.userForm=this.formBuilder.group({
    firstName:[''],
    lastName:[''],
    mobileNumber:[''],
    gender:[''],
    street:[''],
    address1:[''],
    address2:[''],
    city:[''],
    state:[''],
    password:['']
  })
}

registerUser(){

}
}

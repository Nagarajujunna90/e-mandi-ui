import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  loginForm: FormGroup
  submitted = false;

  constructor(private formBuilder: FormBuilder, public router: Router,private userService:UserService) { }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['',[Validators.required, Validators.min(1)]],
      password: ['',[Validators.required, Validators.min(1)]]
    })
  }
  loginUser() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value));
    this.userService.login(this.loginForm.value).subscribe((data)=>{
      console.log(data)
      if(data.match("User details found"))
      this.router.navigateByUrl('/get-products')
    })

  }
}

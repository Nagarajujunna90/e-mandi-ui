import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  loginForm: FormGroup

  constructor(private formBuilder: FormBuilder, public router: Router) { }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: [''],
      password: ['']
    })
  }
  loginUser() {
    this.router.navigateByUrl('/get-products')
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileeditorComponent } from './profileeditor/profileeditor.component';
import { MatTableModule } from '@angular/material/table';
import { AppMaterialModule } from '../app.material-module';


@NgModule({
  declarations: [RegistrationComponent, LoginComponent,ProfileeditorComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AppMaterialModule
  ]
})
export class UserModule { }

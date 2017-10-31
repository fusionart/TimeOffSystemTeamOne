import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RegisterFormComponent } from './register-form.component';
import { RegisterFormRoutes } from './register-form.routes';
import { RegisterUserService } from './../../services/register-user/register-user.service';


@NgModule({
  declarations: [
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RegisterFormRoutes
  ],
  providers: [
    RegisterUserService
  ]
})
export class RegisterFormModule { }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RegisterFormComponent } from './register-form.component';
import { RegisterFormRoutes } from './register-form.routes';

@NgModule({
  declarations: [
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RegisterFormRoutes
  ],
  providers: []
})
export class RegisterFormModule { }
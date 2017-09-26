import { ReactiveFormsModule } from '@angular/forms';
import { LoginRoutes } from './login.routes';
import { LoginComponent } from './login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    LoginRoutes,
    ReactiveFormsModule
  ],
  providers: [],
})
export class LoginModule { }

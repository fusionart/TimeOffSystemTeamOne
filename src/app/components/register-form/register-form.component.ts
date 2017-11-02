import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterUserService } from './../../services/register-user/register-user.service';
import { RegisterUserRequest } from "./../../models/requestModels/RegisterUserRequest";

@Component({
  selector: 'app-register-form',
  templateUrl: '../../templates/register-form.component/register-form.component.html',
  styleUrls: ['../../../assets/styles/register-form.component.css']
})
export class RegisterFormComponent {

  user: RegisterUserRequest;

  id: number;
  username: string;
  password: string;
  personalId: string;
  firstName: string;
  secondName: string;
  lastName: string;
  email: string;
  address: string;
  telephone: string;
  position: string;
  isAdmin: boolean;
  ptoAvailable: number;
  ptoTotal: number;

  repPassword: string;
  noMatch: boolean;

  constructor(
    private router: Router,
    private registerUserService: RegisterUserService
  ) { }

  OnSubmit(form: NgForm) {
    this.user = new RegisterUserRequest(
      this.id,
      this.username,
      this.password,
      this.personalId,
      this.firstName,
      this.secondName,
      this.lastName,
      this.email,
      this.address,
      this.telephone,
      this.position,
      this.isAdmin,
      this.ptoAvailable,
      this.ptoTotal);
    console.log(this.user);

    if (this.password != this.repPassword) {
      this.noMatch = true;
      console.log(this.noMatch);
    } else {
      this.registerUserService.registerUser(this.user).subscribe(
        response => {
          console.log(response);
        },
        error => console.log(error)
      );
      this.router.navigate(['/admin-panel']);
    }
  }
}

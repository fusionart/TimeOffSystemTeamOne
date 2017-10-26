import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterUserService } from './../../services/register-user/register-user.service';
import { registerUserRequest } from "./../../models/requestModels/registerUserRequest";

@Component({
  selector: 'app-register-form',
  templateUrl: '../../templates/register-form.component/register-form.component.html',
  styleUrls: ['../../../assets/styles/register-form.component.css']
})
export class RegisterFormComponent {

  constructor(
    private registerUserService: RegisterUserService
  ) { }

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

  OnSubmit(form: NgForm) {   
    let user = new registerUserRequest(
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
      this.ptoTotal)
    console.log(form)
  }

  OnRegister() {
    if(this.password != this.repPassword)
    {
      this.noMatch = true;
    }
  }

}

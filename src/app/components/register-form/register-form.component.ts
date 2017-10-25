import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterUserService } from './../../services/register-user/register-user.service';
import { User } from "./../../models/user";

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
  persId: string;
  fName: string;
  sName: string;
  lName: string;
  isAdmin: boolean;
  uName: string;
  addr: string;
  telephone: string;
  password: string;
  posit: string;
  email: string;
  ptoAvailable: number;
  ptoTotal: number;

  repPassword: string;
  noMatch: boolean;

  OnSubmit(form: NgForm) {   
    let user = new User(
      this.id,
      this.fName,
      this.sName,
      this.lName,
      this.isAdmin = false,
      this.uName,
      this.addr,
      this.telephone,
      this.password,
      this.posit,
      this.email,
      this.ptoAvailable = null,
      this.ptoTotal = null)
      this.registerUserService.addRequest(user)
    console.log(form)
  }

  OnRegister() {
    if(this.password != this.repPassword)
    {
      this.noMatch = true;
    }
  }

}

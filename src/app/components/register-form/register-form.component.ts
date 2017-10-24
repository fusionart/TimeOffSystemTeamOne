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

  OnSubmit(form: NgForm) {
    let user = new User(
      null,
      "100",
      "Petra",
      "Ivanova",
      "Ivanova",
      false,
      "gotinata1",
      "12345678",
      "cooker",
      "petra@petra.petra",
      20,
      30,
      3
      );
      this.registerUserService.addRequest(user)
    console.log(form)
  }

}

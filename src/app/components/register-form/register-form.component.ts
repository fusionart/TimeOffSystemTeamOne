import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-register-form',
  templateUrl: '../../templates/register-form.component.html',
  styleUrls: ['../../styles/register-form.component.css']
})
export class RegisterFormComponent {

  constructor() { }

  OnSubmit(form: NgForm) {
    console.log(form)
  }

}

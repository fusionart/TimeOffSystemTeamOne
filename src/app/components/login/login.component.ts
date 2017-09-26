import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: '../../templates/login.component/login.component.html',
  styleUrls: ['../../../assets/styles/login.component.css']
})
export class LoginComponent implements OnInit {

  // what exactly the will the user model have as fields so that i know how to implement it

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required ],
      password: ['', Validators.required ]
    });
  }

  ngOnInit() {
  }

}

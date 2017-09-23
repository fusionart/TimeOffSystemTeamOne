import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-request',
  templateUrl: '../../templates/create-request.component/create-request.component.html',
  styleUrls: ['../../../assets/styles/create-request.component.css']
})
export class CreateRequestComponent implements OnInit {
  requestForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.requestForm = new FormGroup({

    });
  }

}

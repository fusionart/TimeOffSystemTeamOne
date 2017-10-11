import { CalendarComponent } from './../calendar/calendar.component';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-request',
  templateUrl: '../../templates/create-request.component/create-request.component.html',
  styleUrls: ['../../../assets/styles/create-request.component.css']
})
export class CreateRequestComponent implements OnInit {
  @ViewChild(CalendarComponent)
  private cal: CalendarComponent;
  requestForm: FormGroup;

  absenceType: string[] = [
    'Paid Time Off',
    'Unpaid Time Off',
    'Sick Leave'
  ];

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {

  }

  createForm() {
    this.requestForm = this.fb.group({
      'absTypes': ''
    });
  }
  onSubmit() {
    console.log(this.requestForm);
    // this.registerForm.reset();
    console.log(this.cal.rangeNewDates[0].getDate());
  }

}

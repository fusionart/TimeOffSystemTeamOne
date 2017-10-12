import { DropdownComponent } from './../dropdown/dropdown.component';
import { CalendarComponent } from './../calendar/calendar.component';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { InputTextareaModule, InputTextModule } from 'primeng/primeng';

@Component({
  selector: 'app-create-request',
  templateUrl: '../../templates/create-request.component/create-request.component.html',
  styleUrls: ['../../../assets/styles/create-request.component.css']
})
export class CreateRequestComponent implements OnInit {
  @ViewChild(CalendarComponent)
  private cal: CalendarComponent;
  @ViewChild(DropdownComponent)
  private ddc: DropdownComponent;

  constructor() {
  }

  ngOnInit() {

  }

  onSubmit() {
    console.log(this.ddc.selectedTot);
    // this.registerForm.reset();
    console.log(this.cal.dates);
  }

}

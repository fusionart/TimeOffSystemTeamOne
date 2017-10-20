import { Router, ActivatedRoute } from "@angular/router";
import { TimeOffRequest } from "./../../models/timeOffRequest";
import { CreateRequestService } from "./../../services/create-request/create-request.service";
import { DropdownComponent } from "./../dropdown/dropdown.component";
import { CalendarComponent } from "./../calendar/calendar.component";
import { Component, OnInit, Input, ViewChild, NgZone } from "@angular/core";
import { FormControl, FormGroup, Validators, FormBuilder } from "@angular/forms";
import { InputTextareaModule, InputTextModule } from "primeng/primeng";

@Component({
  selector: "app-create-request",
  templateUrl: "../../templates/create-request.component/create-request.component.html",
  styleUrls: ["../../../assets/styles/create-request.component.css"]
})
export class CreateRequestComponent implements OnInit {
  @ViewChild(CalendarComponent) private cal: CalendarComponent;
  @ViewChild(DropdownComponent) private ddc: DropdownComponent;

  inputDates: string;
  timeOffRequest: TimeOffRequest;
  reasons: string;
  note: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private createRequestService: CreateRequestService,
    private ngZone: NgZone
  ) { }

  ngOnInit() { }

  onSelected($event): void{
    this.inputDates = $event;
  }
  
  onSubmit() {
    this.timeOffRequest = new TimeOffRequest();
    this.timeOffRequest.days = this.cal.dates.length;
    this.timeOffRequest.type = this.ddc.selectedTot.code;
    this.timeOffRequest.dateStart = this.cal.dates[0];
    this.timeOffRequest.dateFinish = this.cal.dates[this.cal.dates.length - 1];
    this.timeOffRequest.dateFinish = this.cal.dates[this.cal.dates.length - 1];
    this.timeOffRequest.reason = this.reasons;
    this.timeOffRequest.note = this.note;

    this.createRequestService
      .addRequest(this.timeOffRequest)
      .subscribe(
      response => console.log(response),
      error => console.log(error)
      );
    this.ngZone.run(() => {
      this.router.navigate(["/list"]);
    });
  }
}

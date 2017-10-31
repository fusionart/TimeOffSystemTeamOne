import { RequestListService } from './../../services/request-list/request-list.service';
import { Router, ActivatedRoute } from "@angular/router";
import { TimeOffRequest } from "./../../models/timeOffRequest";
import { CreateRequestService } from "./../../services/create-request/create-request.service";
import { DropdownComponent } from "./../dropdown/dropdown.component";
import { CalendarComponent } from "./../calendar/calendar.component";
import { Component, OnInit, Input, ViewChild, NgZone } from "@angular/core";
import { FormControl, FormGroup, Validators, FormBuilder } from "@angular/forms";
import { InputTextareaModule, InputTextModule } from "primeng/primeng";
import { User } from '../../models/user';

@Component({
  selector: "app-create-request",
  templateUrl: "../../templates/create-request.component/create-request.component.html",
  styleUrls: ["../../../assets/styles/create-request.component.css"]
})
export class CreateRequestComponent implements OnInit {
  @ViewChild(CalendarComponent) private cal: CalendarComponent;
  @ViewChild(DropdownComponent) private ddc: DropdownComponent;

  inputDates: string;
  tot: any = "";
  selectedDays: number = 0;
  currentuserAvailablePto: number;
  showCalendar: boolean = false;
  toClearCalendar: boolean = false;
  disableCalendar: boolean = false;
  timeOffRequest: TimeOffRequest;
  reasons: string;
  note: string;
  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private createRequestService: CreateRequestService,
    private requestListService: RequestListService,
    private ngZone: NgZone
  ) {
    //location.reload(true);
  }

  ngOnInit() {
    this.getCurrentUser();
    this.requestListService.setRowData(null);
  }

  getCurrentUser() {
    this.requestListService.getCurrentUserData().subscribe(
      user => { this.user = user },
      (err) => { console.log(err) },
      () => { this.getCurentUserAvailablePto() });
  }

  getCurentUserAvailablePto() {
    if (this.user != null) {
      this.currentuserAvailablePto = this.user.ptoAvailable;
    }
  }

  updatePto() {
    if (this.tot.code == "PTO") {
      this.currentuserAvailablePto = this.user.ptoAvailable - this.selectedDays;
      if ((this.user.ptoAvailable - this.selectedDays) == 0) {
        this.cal.disableCalendar();
      }
    } else {
      this.currentuserAvailablePto = this.user.ptoAvailable;
      this.disableCalendar = true;
    }

  }

  onCalendarChange(calendarData: { selectedDates: string, selectedDays: number }): void {
    this.inputDates = calendarData.selectedDates;
    this.selectedDays = calendarData.selectedDays;
    this.allowSubmit();
    this.updatePto();
  }

  allowSubmit() {
    if (this.tot != null && this.selectedDays > 0 && this.reasons != null) {
      return false;
    } else {
      return true;
    }
  }

  allowClear() {
    if (this.selectedDays > 0) {
      return false;
    } else {
      return true;
    }
  }

  totChanged($event): void {
    if ($event != null) {
      this.tot = $event;
      this.currentuserAvailablePto = this.user.ptoAvailable;
      switch (this.tot.id) {
        case 1:
          this.cal.ptoInvalidaDates();
          break;
        case 3:
          this.cal.slInvalidaDates();
          break;

        default:
          this.cal.showAllDates();
          break;
      }
      if (this.cal != null) {
        this.cal.onClear();
      }
    }
  }

  clearCalendar() {
    this.cal.onClear();
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
    this.timeOffRequest.selectedDays = this.cal.dates;

    this.createRequestService
      .addRequest(this.timeOffRequest)
      .subscribe(
      response => {console.log(response), this.requestListService.filter("reload")},
      error => console.log(error)
      );
    //this.requestListService.filter("reload");
    //this.ngZone.run(() => {
    this.router.navigate(["/list"]);
    //});
  }
}

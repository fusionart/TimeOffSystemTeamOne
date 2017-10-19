import { TimeOffRequest } from './../../models/timeOffRequest';
import { RequestListService } from './../../services/request-list/request-list.service';
import { Holiday } from './../../models/holiday';
import { CalendarService } from './../../services/calendar/calendar.service';
import { Component, OnInit } from '@angular/core';
import { SelectItem, Message } from 'primeng/components/common/api';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-calendar',
  templateUrl: '../../templates/calendar.component/calendar.component.html',
  styleUrls: ['../../../assets/styles/calendar.component.css']
})
export class CalendarComponent implements OnInit {
  dates: Date[];
  basicDateInput: Date;
  localizedDateInput: Date;
  advancedDateInput: Date;
  timeDateInput: Date;
  inlineDateInput: Date;
  iconDateInput: Date;
  navigatorDateInput: Date;
  minmaxDateInput: Date;
  disabeDaysDateInput: Date;
  eventsDateInput: Date;
  readonlyDateInput: Date;
  disableDateInput: Date;
  invalidDates: Date[];
  minDate: Date;
  maxDate: Date;
  time: boolean;
  en: any;
  types: SelectItem[];
  selectedHourFormat: string = '12';
  msgs: Message[] = [];
  activeIndex: number = 0;
  inputDates: String;

  holiday: Array<Holiday>;
  holidayDays: Array<Date>;
  greenDays: Date[];
  selectedRowData: TimeOffRequest;

  constructor(private calendar: CalendarService, private requestListService: RequestListService) {
    this.holiday = Array<Holiday>();
    this.selectedRowData = new TimeOffRequest;
  }
  onClickEvt($event, date) {
    // console.log("onClickEvent")
    // console.log($event);
    // console.log("onClickEvent")
    // console.log(date);
  }
  onSelect($event) {

    let commar: String = ", ";
    this.inputDates = "";
    for (var i = 0; i < this.dates.length; i++) {
      if (i == this.dates.length - 1) {
        commar = "";
      }
      this.inputDates += this.dates[i].getDate() + "/" + this.dates[i].getMonth() + "/" + this.dates[i].getFullYear() + commar;
    }
  }

  onBlur() {

  }

  onFocus() {

  }

  onClear() {
    this.inputDates = "";
  }

  set hourFormat(hourFormat: string) {
    this.selectedHourFormat = hourFormat;
    if (this.timeDateInput) {
      this.timeDateInput = new Date(this.timeDateInput.getTime());
    }
  }

  get hourFormat(): string {
    return this.selectedHourFormat;
  }

  ngOnInit() {
    this.getHolidays();
    this.greenDays = [];
    this.selectedRowData = this.requestListService.getRowData();
    if (this.selectedRowData != null) {
      this.makeGreenDays();
    } else {
      console.log("not maing green");
    }

    this.en = {
      firstDayOfWeek: 1,
      dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      today: 'Today',
      clear: 'Clear'
    };

    this.types = [];
    this.types.push({ label: '12H Format', value: '12' });
    this.types.push({ label: '24H Format', value: '24' });

    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month - 1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;
    this.minDate = new Date();
    this.minDate.setMonth(prevMonth);
    this.minDate.setFullYear(prevYear);
    this.maxDate = new Date();
    this.maxDate.setMonth(nextMonth);
    this.maxDate.setFullYear(nextYear);

    let invalidDate = new Date("10, 17, 2017");
    invalidDate.setDate(today.getDate() - 1);
    //this.greenDays = [invalidDate];
    this.invalidDates = [];
  }

  getHolidays() {
    this.calendar.getHolidays().subscribe(holiday => {
      this.holiday = holiday;
      this.convertDates();
    })
  }

  convertDates() {
    this.holiday.forEach(element => {
      element.date = new Date(element.date);
      this.invalidDates.push(element.date);
    });
  }

  setMyStyles(date) {
    for (var i = 0; i < this.invalidDates.length; i++) {
      if (date.day == this.invalidDates[i].getDate() && date.month == this.invalidDates[i].getMonth() && date.year == this.invalidDates[i].getFullYear()) {
        return true;
      }
    }
  }

  greenStyle(date) {
    if (this.greenDays.length > 0) {
      for (var i = 0; i < this.greenDays.length; i++) {
        if (date.day == this.greenDays[i].getDate() && date.month == this.greenDays[i].getMonth() && date.year == this.greenDays[i].getFullYear()) {
          return true;
        }
      }
    } else {
      return false;
    }
  }

  makeGreenDays() {
    if (this.selectedRowData != null) {
      let firstDate = new Date(this.selectedRowData.dateStart);
      let secondDate = new Date(this.selectedRowData.dateFinish);
      firstDate.setDate(firstDate.getDate() - 1);
      while (firstDate < secondDate) {
        firstDate.setDate(firstDate.getDate() + 1);
        this.greenDays.push(new Date(firstDate));
      }
      return this.greenDays;
    }
  }
}

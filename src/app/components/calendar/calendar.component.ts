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


  onSelect() {
    this.dates.sort;
    console.log(this.dates);
    this.populateDates();
  }

  populateDates() {
    let commar: String = ", ";
    this.inputDates = "";
    for (var i = 0; i < this.dates.length; i++) {
      if (i == this.dates.length-1) {
        commar = "";
      }
      this.inputDates += this.dates[i].getDate() + "/" + this.dates[i].getMonth() + "/" + this.dates[i].getFullYear() + commar;
    }
  }

  onBlur($event) {
    console.log("blur"+this.dates);
  }

  onFocus($event) {
    console.log("focus"+this.dates);
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

    let invalidDate = new Date();
    invalidDate.setDate(today.getDate());
    this.invalidDates = [today, invalidDate];

  }
}

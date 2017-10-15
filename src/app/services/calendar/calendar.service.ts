import { environment } from './../../../environments/environment';
import { Holiday } from './../../models/holiday';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CalendarService {
  public static readonly GET_HOLIDAYS = environment.apiUrl + "/api/holiday-list";
  holiday: Array<Holiday>;
  constructor(private http: Http) { 
    this.holiday = new Array<Holiday>();
  }

  extractData(response: Response){
    return response.json();
}

  public getHolidays(): Observable<Holiday[]> {
    var headers = new Headers();
    headers.append('Content-type', 'application/x-www-form-urlencoded');
    return this.http.get(CalendarService.GET_HOLIDAYS, { headers: headers })
        .map(this.extractData)
        .map((holiday: Array<Holiday>) => {
            let result: Array<Holiday> = [];
            if (holiday) {
              holiday.forEach((holiday) => {
                    result.push(holiday);
                });
            }
            return result;
        });
}
}

import { environment } from './../../../environments/environment';
import { Holiday } from './../../models/holiday';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { UserService } from '../user/user.service';

@Injectable()
export class CalendarService {
  public static readonly GET_HOLIDAYS = environment.apiUrl + "/api/holiday-list";
  holiday: Array<Holiday>;
  constructor(private http: Http, private userService: UserService) { 
    this.holiday = new Array<Holiday>();
  }

  extractData(response: Response){
    return response.json();
}

  public getHolidays(): Observable<Holiday[]> {
    let cpHeaders = new Headers({ "Content-Type": "application/x-www-form-urlencoded"});
    
    //token header
    let token = this.userService.getStoredToken();
    console.log(token);
    if (token !== null) {
      cpHeaders.append("Authorization", token);
    }

    let options = new RequestOptions({ headers: cpHeaders });

    return this.http.get(CalendarService.GET_HOLIDAYS, options)
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

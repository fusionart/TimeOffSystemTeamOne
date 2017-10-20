import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { User } from "../../models/user";
import { TimeOffRequest } from "../../models/timeOffRequest";
import { UserService } from '../user/user.service';

@Injectable()
export class AdminPanelService {
  requests: Array<TimeOffRequest>;

  public static readonly GET_REQUESTS = environment.apiUrl + "/api/request-list";
  public static readonly APPROVE_REQUEST = environment.apiUrl + "/api/approve";

  constructor(private http: Http, private userService: UserService) {
    this.requests = new Array<TimeOffRequest>();
  }

  extractData(response: Response) {
    return response.json();
  }

  public getRequests(): Observable<TimeOffRequest[]> {
    let cpHeaders = new Headers({ "Content-Type": "application/x-www-form-urlencoded" });

    let token = this.userService.getStoredToken();
    console.log(token);
    if (token !== null) {
      cpHeaders.append("Authorization", token);
    }

    let options = new RequestOptions({ headers: cpHeaders });

    return this.http.get(AdminPanelService.GET_REQUESTS, options)
      .map(this.extractData)
      .map((requests: Array<TimeOffRequest>) => {
        let result: Array<TimeOffRequest> = [];
        if (requests) {
          requests.forEach((requests) => {
            result.push(requests);
          });
        }
        return result;
      });
  }

  approveRequest(approveObj: any): Observable<any> {
    //console.log("service: ");
    //console.log(JSON.stringify(timeOffRequest));
    let cpHeaders = new Headers({ "Content-Type": "application/json" });

    //token header
    let token = this.userService.getStoredToken();
    console.log(token);
    if (token !== null) {
      cpHeaders.append("Authorization", token);
    }

    let options = new RequestOptions({ headers: cpHeaders });
    return this.http
      .post(AdminPanelService.APPROVE_REQUEST, approveObj, options)
      .map(success => success.status);
  }

  getTOFimage(typeTO: string): Promise<String> {
    let imageFileName = '/assets/images/';
    if (typeTO === 'PTO') {
      imageFileName += 'PTO.png';
    } if (typeTO === 'UPTO') {
      imageFileName += 'UPTO.png';
    } else {
      imageFileName += 'sick_leave.png';
    }
    return Promise.resolve(imageFileName);
  }

}

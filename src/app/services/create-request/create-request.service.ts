import { TimeOffRequest } from "./../../models/timeOffRequest";
import { environment } from "./../../../environments/environment";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Http, Headers, RequestOptions, Response } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { UserService } from "../user/user.service";

@Injectable()
export class CreateRequestService {
  public static readonly CREATE_REQUEST = environment.apiUrl +"/api/new_request";
  constructor(private http: Http, private userService: UserService) {}

  addRequest(timeOffRequest: TimeOffRequest): Observable<any> {
    let cpHeaders = new Headers({ "Content-Type": "application/json" });

    let token = this.userService.getStoredToken();
    //console.log(token);
    if (token !== null) {
      cpHeaders.append("Authorization", token);
    }

    let options = new RequestOptions({ headers: cpHeaders });
    return this.http
      .post(CreateRequestService.CREATE_REQUEST, timeOffRequest, options)
      .map(success => success.status);
  }
}

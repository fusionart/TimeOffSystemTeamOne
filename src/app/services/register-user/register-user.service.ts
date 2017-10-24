import { TimeOffRequest } from "./../../models/timeOffRequest";
import { environment } from "./../../../environments/environment";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Http, Headers, RequestOptions, Response } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { UserService } from "../user/user.service";
import { User } from "./../../models/user";

@Injectable()
export class RegisterUserService {
  public static readonly SERVICE_URL = environment.apiUrl +"/api/sign-up";
  constructor(private http: Http, private userService: UserService) {}

  addRequest(user: User): Observable <any> {
    let cpHeaders = new Headers({ "Content-Type": "application/json" });

    let options = new RequestOptions({ headers: cpHeaders });
    return this.http
      .post(RegisterUserService.SERVICE_URL, user, options)
      .map(success => success.status);
  }
}

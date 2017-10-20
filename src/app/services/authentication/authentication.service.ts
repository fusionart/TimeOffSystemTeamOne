import { Injectable } from "@angular/core";
import { Http, Headers, Response, RequestOptions } from "@angular/http";
import { Router } from "@angular/router";
import { environment } from "./../../../environments/environment";
import { Observable, Subject } from "rxjs";
import { UserService, LoginInfoInStorage } from "../user/user.service";
import { ApiRequestService } from "../api-request/api-request.service";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

export interface LoginRequestParam {
  username: string;
  password: string;
}

@Injectable()
export class AuthenticationService {
  public static readonly LOGIN_REQUEST = environment.apiUrl + "/login";
  public static readonly USER_DETAILS_REQUEST = environment.apiUrl + "/api/user-info";
  public currentUserKey: string = "currentUser";
  public landingPage: string = "/login";
  public token: string;
  private headers = new Headers({ "Content-Type": "application/json" });
  private requests: any[] = [];
  private requestsUserInfo: any;

  constructor(
    private router: Router,
    private http: Http,
    private userService: UserService,
    private apiRequest: ApiRequestService
  ) {
    var currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.token = currentUser && currentUser.token;
  }

  login(username: string, password: string): Observable<boolean> {
    console.log(
      "service: " + JSON.stringify({ username: username, password: password })
    );
    let header = new Headers({ "Content-Type": "application/json" });

    let options = new RequestOptions({ headers: header });

    return this.http
      .post(
        AuthenticationService.LOGIN_REQUEST,
        JSON.stringify({ username: username, password: password }),
        options
      )
      .map((response: Response) => {
        console.log(response);
        console.log(response.text());
        let token = response.text();
        if (token) {
          // set token property
          this.token = token;
          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem(
            "currentUser",
            JSON.stringify({ username: username, token: token })
          );
          // return true to indicate successful login
          console.log(localStorage.getItem("currentUser"));
          this.getCurrentuserDetails(username).subscribe(requests => (this.requestsUserInfo = requests));

          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      });
  }

  getCurrentuserDetails(username: string): Observable<any> {
    let userDetailsHeaders = new Headers({ "Content-Type": "application/json" });
    let token = this.userService.getStoredToken();
    if (token !== null) {
      userDetailsHeaders.append("Authorization", token);
    }
    console.log(userDetailsHeaders, "     -------------- userDetailsHeaders ---------------");
    
    let options = new RequestOptions({ headers: userDetailsHeaders });

    return this.http
    .post(AuthenticationService.USER_DETAILS_REQUEST, JSON.stringify({username: username}), options)
    .map((response: Response) => {  
        console.log(" ------------------------------------ getCurrentuserDetails - Response -------------------------- ", response);
          localStorage.setItem(
            "currentUser",
            JSON.stringify(response)
          );
          console.log( "   ----------------------------- getCurrentuserDetails     2     ---------------------- ");
          console.log(localStorage.getItem("currentUser"));
          console.log(localStorage.getItem("currentUser"));
          return true;
        });
      }

  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem("currentUser");
    console.log(" -------------------- logout -----------------------------");
  }
}

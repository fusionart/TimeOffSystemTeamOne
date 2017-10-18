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
  public static readonly LOGIN_REQUEST = environment.apiUrl +
    "/login";
  public currentUserKey: string = "currentUser";
  public landingPage:string = "/login";
  public storage: Storage = sessionStorage;
  public token: string;

  constructor(
    private router: Router,
    private http: Http,
    private userInfoService: UserService,
    private apiRequest: ApiRequestService
  ) {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(username: string, password: string): Observable<boolean>  {
    console.log(
      "service: " + JSON.stringify({ username: username, password: password })
    );
    var header = new Headers({ "Content-Type": "application/json" });
    return this.http
      .post(
        AuthenticationService.LOGIN_REQUEST,
        JSON.stringify({ username: username, password: password })
      )
      .map((response: Response) => {
        let token = response.headers.get("authorization");
        if (token) {
            // set token property
            this.token = token;
            // store username and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
            // return true to indicate successful login
            console.log(localStorage.getItem("currentUser.username"));
            
            return true;
        } else {
            // return false to indicate failed login
            return false;
        }
  });
    
  }
  
  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
    console.log(" -------------------- logout -----------------------------");

  }
}

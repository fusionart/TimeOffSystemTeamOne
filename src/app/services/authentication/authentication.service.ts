import { Injectable } from "@angular/core";
import { Http, Headers, Response, RequestOptions } from "@angular/http";
import { environment } from "./../../../environments/environment";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

export interface LoginRequestParam {
  username: string;
  password: string;
}

@Injectable()
export class AuthenticationService {
  public static readonly CREATE_REQUEST = environment.apiUrl +
    "/api/authenticate";
  public currentUserKey: string = "currentUser";
  public storage: Storage = sessionStorage;

  constructor(private http: Http) {}



  logi2n(username: string, password: string) {
    console.log(
      "service: " + JSON.stringify({ username: username, password: password })
    );
    var header = new Headers({ "Content-Type": "application/json" });
    return this.http
      .post(
        AuthenticationService.CREATE_REQUEST,
        JSON.stringify({ username: username, password: password })
      )
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let user = response.json();
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem("currentUser", JSON.stringify(user));
        }

        return user;
      });
  }

  login(username: string, password: string): Observable<any> {
    console.log(localStorage.length);

    let bodyData: LoginRequestParam = {
      username: username,
      password: password
    };
    console.log("service: ");
    console.log(JSON.stringify(bodyData));
    let cpHeaders = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions({ headers: cpHeaders });
    return this.http
      .post(AuthenticationService.CREATE_REQUEST, bodyData, options)
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let user = response.json();
        console.log(" user.token ---- " + user.token);
        console.log(" localStorage ---- " + localStorage);
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem("currentUser", JSON.stringify(user));
          console.log(user);

          console.log(localStorage.getItem("currentUser") + "Currnt user");
        }
        console.log(" user.token ---- " + user.token);

        console.log(localStorage.getItem("currentUser") + "Currnt user");
        console.log(localStorage.getItem("currentUser") + "Currnt user");
        return user;
      });
  }
}

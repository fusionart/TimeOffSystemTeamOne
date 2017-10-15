import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
 
@Injectable()
export class AuthenticationService {
    public static readonly CREATE_REQUEST = environment.apiUrl + "/api/authenticate";
    
    constructor(private http: Http) { }
 
    login(username: string, password: string) {
        console.log("service: " + JSON.stringify({ username: username, password: password }));
        return this.http.post(AuthenticationService.CREATE_REQUEST, JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
 
                return user;
            });
    }
}
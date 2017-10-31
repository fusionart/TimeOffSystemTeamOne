import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Injectable } from '@angular/core';
import { User } from "../../models/user";
import { TimeOffRequest } from "../../models/timeOffRequest";
import { UserService } from '../user/user.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RequestListService {
    private _listners = new Subject<any>();
    requests: Array<TimeOffRequest>;
    currentUser: User;
    selectedRowData: any;
    public static readonly GET_REQUESTS = environment.apiUrl + "/api/request-list";
    public static readonly GET_USER = environment.apiUrl + "/api/get-user?id=";

    constructor(private http: Http, private userService: UserService) {
        this.requests = new Array<TimeOffRequest>();
    }

    setRowData(data) {
        this.selectedRowData = data;
    }

    getRowData() {
        return this.selectedRowData;
    }

    listen(): Observable<any> {
        return this._listners.asObservable();
    }

    filter(filterBy: string) {
        this._listners.next(filterBy);
    }

    get userId(): any {
        if (localStorage.getItem("currentUser") != null) {
           return JSON.parse(localStorage.getItem("currentUserDetails")).userId;
        } else {
            return false;
        }
    }

    extractData(response: Response) {
        return response.json();
    }

    public getCurrentUserData(): Observable<User> {
        let cpHeaders = new Headers({ "Content-Type": "application/x-www-form-urlencoded" });

        let token = this.userService.getStoredToken();
        if (token !== null) {
            cpHeaders.append("Authorization", token);
        }
        let options = new RequestOptions({ headers: cpHeaders });
        var loggedUser = this.userId;
        return this.http.get(RequestListService.GET_USER + loggedUser, options)
            .map(this.extractData)
            .map((responseUser: User) => {
                let result: User;
                if (responseUser) {
                    result = responseUser;
                }
                return result;
            });
    }

    public getRequests(): Observable<TimeOffRequest[]> {
        let cpHeaders = new Headers({ "Content-Type": "application/x-www-form-urlencoded" });
                
                let token = this.userService.getStoredToken();
                if (token !== null) {
                    cpHeaders.append("Authorization", token);
                }
                let options = new RequestOptions({ headers: cpHeaders });
                return this.http.get(RequestListService.GET_USER + this.userId, options)
               .map((response: Response) => {    
                this.currentUser = response.json();
                return response.json().userRequests;
              });
    }

    public getAllRequests(): Observable<TimeOffRequest[]> {
        let cpHeaders = new Headers({ "Content-Type": "application/x-www-form-urlencoded" });

        let token = this.userService.getStoredToken();
        if (token !== null) {
            cpHeaders.append("Authorization", token);
        }

        let options = new RequestOptions({ headers: cpHeaders });

        return this.http.get(RequestListService.GET_REQUESTS, options)
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
function newFunction() {
    return this.currentUser.getRequests();
}


import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { USERS } from "../../models/mock-user";
import { REQUESTS } from "../../models/mock-request";
import { User } from "../../models/user";
import { TimeOffRequest } from "../../models/timeOffRequest";

@Injectable()
export class RequestListService {
    requests: Array<TimeOffRequest>;
    constructor(private http: Http) {
        this.requests = new Array<TimeOffRequest>();
    }

    public static readonly GET_REQUESTS = environment.apiUrl + "/api/request-list";

    extractData(response: Response) {
        return response.json();
    }

    getUsers(): Promise<User[]> {
        return Promise.resolve(USERS);
    }

    public getRequests(): Observable<TimeOffRequest[]> {
        var headers = new Headers();
        headers.append('Content-type', 'application/x-www-form-urlencoded');
        return this.http.get(RequestListService.GET_REQUESTS, { headers: headers })
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

    // getUser(userId: number): Promise<User> {
    //     return this.getUsers()
    //         .then(users => users.find(user => user.userId === userId));
    // }

    // getRequest(requestId: number): Promise<TimeOffRequest> {
    //     return this.getRequests()
    //         .then(requests => requests.find(request => request.requestId === requestId));
    // }

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

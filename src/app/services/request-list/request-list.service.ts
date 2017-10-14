import { Injectable } from '@angular/core';
import { USERS } from "../../models/mock-user";
import { REQUESTS } from "../../models/mock-request";
import { User } from "../../models/user";
import { TimeOffRequest } from "../../models/timeOffRequest";

@Injectable()
export class RequestListService {
    getUsers(): Promise<User[]> {
        return Promise.resolve(USERS);
    }

    getRequests(): Promise<TimeOffRequest[]> {
        return Promise.resolve(REQUESTS);
    }

    getUser(userId: number): Promise<User> {
        return this.getUsers()
            .then(users => users.find(user => user.userId === userId));
    }
    
    getRequest(requestId: number): Promise<TimeOffRequest> {
        return this.getRequests()
            .then(requests => requests.find(request => request.requestId === requestId));
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

    constructor() { }

}

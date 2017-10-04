import { Injectable } from '@angular/core';
import { USERS } from "../models/mock-user";
import { REQUESTS } from "../models/mock-request";
import { User } from "../models/user";
import { Request } from "../models/request";

@Injectable()
export class RequestListService {
    getUsers(): Promise<User[]> {
        return Promise.resolve(USERS);
    }

    getRequests(): Promise<Request[]> {
        return Promise.resolve(REQUESTS);
    }

    getUser(userId: number): Promise<User> {
        return this.getUsers()
            .then(users => users.find(user => user.userId === userId));
    }
    getRequest(requestId: number): Promise<Request> {
        return this.getRequests()
            .then(requests => requests.find(request => request.requestId === requestId));
    }

constructor() { }

}
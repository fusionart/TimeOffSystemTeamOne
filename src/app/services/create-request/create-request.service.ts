import { TimeOffRequest } from './../../models/timeOffRequest';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CreateRequestService {
  //request: Request;
  public static readonly CREATE_REQUEST = "http://localhost:8080/api/new_request";
  constructor(private http: Http) {
    //this.request = new Request();
  }
  addRequest(body: FormData) {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(CreateRequestService.CREATE_REQUEST, body, { headers: headers });
  }
}

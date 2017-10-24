import { AdminPanelService } from './../../services/admin-panel/admin-panel.service';
import { TimeOffRequest } from './../../models/timeOffRequest';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestListService } from '../../services/request-list/request-list.service';
import { Location } from '@angular/common';
import { User } from '../../models/user';
import { TimeOffRequestInterface } from '../../models/timeOffRequestInterface';

@Component({
  selector: 'app-admin-panel',
  templateUrl: '../../templates/admin-panel.component/admin-panel.component.html',
  styleUrls: ['../../../assets/styles/admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  encapsulation: ViewEncapsulation.None

  requests: TimeOffRequest[] = [];
  user: User;
  recordCount: number;
  amountOfRequests: number;
  selectedRow: any;
  selectedRowData: any;
  isApproved: boolean = false;

  displayDialog: boolean;
  request: TimeOffRequestInterface = new PrimeRequest();  //car
  selectedRequest: TimeOffRequestInterface; //selectedCar
  newRequest: boolean; //newCar
  requestsI: TimeOffRequestInterface[]; //cars

  constructor(
    private requestListService: RequestListService,
    private adminPanelService: AdminPanelService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) {
    this.router = router;
  }

  ngOnInit() {
    this.getRequests();
  }
  getRequests() {
    this.requestListService.getAllRequests().subscribe(requests => (this.requests = requests));
    this.recordCount = this.requests.length;
  }

  goBack(): void {
    this.location.back();
  }

  getTOimage(typeTO: string): String {
    const typeTOs = ['PTO', 'UPTO'];

    let imageFileName = '/assets/images/';
    if (typeTOs.indexOf(typeTO) !== -1) {
      imageFileName += typeTO + '.png';
    } else {
      imageFileName += 'sick_leave.png';
    }
    return imageFileName;
  }

  allTypesNames = ['', 'PTO', 'UPTO', 'SL'];

  allTypes = this.allTypesNames.map((tot) => {
    return { label: tot, value: tot }
  });

  statusNames = ['', 'approved', 'unapproved'];

  status = this.statusNames.map((tot) => {
    return { label: tot, value: tot }
  });

  getAmountOfRequests() {
    return this.amountOfRequests = this.requests.length;
  }

  showDialogToAdd() {
    this.newRequest = true;
    this.request = new PrimeRequest();
    this.displayDialog = true;
  }

  approve() {
    let approveObj = {
      requestId: this.request.id, userId: JSON.parse(localStorage.getItem("currentUserDetails")).userId
    }

    this.adminPanelService
      .approveRequest(approveObj)
      .subscribe(
      response => { console.log(response), this.getRequests() },
      error => console.log(error)
      );

    this.request = null;
    this.displayDialog = false;
  }

  close() {
    this.request = null;
    this.displayDialog = false;
  }

  onRowSelected(event) {
    this.newRequest = false;
    this.request = this.cloneRequest(event.data);
    if (this.request.status != "approved") {
      this.isApproved = true;
    } else {
      this.isApproved = false;
    }
    this.displayDialog = true;
  }

  cloneRequest(c: TimeOffRequestInterface): TimeOffRequestInterface {
    let request = new PrimeRequest();
    for (let prop in c) {
      request[prop] = c[prop];
    }
    return request;
  }

}

class PrimeRequest implements TimeOffRequestInterface {

  constructor(public type?, public days?, public reason?, public note?, public id?, public status?) { }
}


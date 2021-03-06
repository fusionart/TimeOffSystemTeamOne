import { AdminPanelService } from './../../services/admin-panel/admin-panel.service';
import { TimeOffRequest } from './../../models/timeOffRequest';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestListService } from '../../services/request-list/request-list.service';
import { Location } from '@angular/common';
import { User } from '../../models/user';
import { TimeOffRequestInterface } from '../../models/timeOffRequestInterface';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin-panel',
  templateUrl: '../../templates/admin-panel.component/admin-panel.component.html',
  styleUrls: ['../../../assets/styles/admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  requests: TimeOffRequest[] = [];
  user: User;
  recordCount: number;
  amountOfRequests: number;
  selectedRow: any;
  selectedRowData: any;
  isApproved: boolean = false;
  ptoType: string;

  displayDialog: boolean;
  request: TimeOffRequestInterface = new PrimeRequest();
  selectedRequest: TimeOffRequestInterface;
  newRequest: boolean;
  requestsI: TimeOffRequestInterface[];

  @ViewChild('t') public tooltip: NgbTooltip;

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

  cancel() {
    let approveObj = {
      requestId: this.request.id, requestDays: this.request.days, requestType: this.request.type, userId: JSON.parse(localStorage.getItem("currentUserDetails")).userId, requestUserId: this.request.userId
    }
    this.adminPanelService
      .cancelRequest(approveObj)
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

  onFocusT(type) {
    if (type == "PTO") {
      return this.ptoType = "Paid time off";
    } else if (type == "UPTO") {
      return this.ptoType = "Unpaid time off";
    } else if (type == "SL") {
      return this.ptoType = "Sick leave";
    }
  }

}

class PrimeRequest implements TimeOffRequestInterface {

  constructor(public type?, public days?, public reason?, public note?, public id?, public status?, public userId?) { }
}


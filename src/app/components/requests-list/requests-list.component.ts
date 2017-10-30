import { AuthenticationService } from './../../services/authentication/authentication.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';
import { User } from '../../models/user';
import { TimeOffRequest } from "../../models/timeOffRequest";
import { RequestListService } from '../../services/request-list/request-list.service';
import { FormControl } from "@angular/forms";
import 'rxjs/add/operator/switchMap';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-requests-list',
  templateUrl: '../../templates/request-list.component/requests-list.component.html',
  styleUrls: ['../../../assets/styles/requests-list.component.css']
})
export class RequestsListComponent implements OnInit {
  requests: TimeOffRequest[] = [];
  user: User;
  recordCount: number;
  amountOfRequests: number;
  selectedRow: any;
  selectedRowData: any;
  currentuserAvailablePto: number;
  theDays: number;
  ptoType: string;

  @ViewChild('t') public tooltip: NgbTooltip;

  constructor(
    private requestListService: RequestListService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private authe: AuthenticationService) {
    this.router = router;
    this.requestListService.listen().subscribe((m: any) => {
      this.reloadGetRequests(m);
    })
    this.authe.listen().subscribe((m: any) => {
      this.getCurrentUser();
      this.getRequests();
    })
  }

  ngOnInit() {
    if (this.authe.isUser == null) {
      this.getRequests();
      this.getCurrentUser();
    }
  }

  reloadGetRequests(m) {
    if (m === "reload") {
      console.log("reload");
      this.getCurrentUser();
      this.getRequests();
    } else {
      console.log("no reload");
    }
  }

  getRequests() {
    this.requestListService.getRequests().subscribe(requests => (this.requests = requests));
    this.recordCount = this.requests.length;
  }

  getCurrentUser() {
    this.requestListService.getCurrentUserData().subscribe(
      user => { this.user = user },
      (err) => { console.log(err) },
      () => { this.getCurentUserAvailablePto() });
  }

  getCurentUserAvailablePto() {
    if (this.user != null) {
      this.currentuserAvailablePto = this.user.ptoAvailable;
    }
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

  onRowSelected(rowInfo) {
    this.selectedRowData = rowInfo.data;
    this.requestListService.setRowData(this.selectedRowData);
    this.router.navigate(['/request-details']);
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


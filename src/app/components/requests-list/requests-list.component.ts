import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';
import { User } from '../../models/user';
import { TimeOffRequest } from "../../models/timeOffRequest";
import { RequestListService } from '../../services/request-list/request-list.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-requests-list',
  templateUrl: '../../templates/request-list.component/requests-list.component.html',
  styleUrls: ['../../../assets/styles/requests-list.component.css']
})
export class RequestsListComponent implements OnInit {
  requests: TimeOffRequest[] = [];
  user: User[] = [];
  recordCount: number;
  amountOfRequests: number;
  selectedRow: any;
  selectedRowData: any;

  constructor(
    private requestListService: RequestListService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) {
    this.router = router;
  }

  ngOnInit() {
    this.getRequests();
    this.getCurrentUser()
  }

  getRequests() {
    this.requestListService.getRequests().subscribe(requests => (this.requests = requests));
    this.recordCount = this.requests.length;
  }

  getCurrentUser() {
    this.requestListService.getCurrentUserData().subscribe(user => (this.user = user));
  }

  getCurentUserAvailablePto() {
    if (this.user.length >0) {
      return this.user[0].ptoAvailable;
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

  getTOimage2(typeTO: string): String {
    let imageFileName = '/assets/images/';
    if (typeTO === 'PTO') {
      imageFileName += 'PTO.png';
    } else if (typeTO === 'UPTO') {
      imageFileName += 'UPTO.png';
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

}


import { TimeOffRequest } from './../../models/timeOffRequest';
import { RequestsListComponent } from './../requests-list/requests-list.component';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';
import { RequestListService } from '../../services/request-list/request-list.service';

@Component({
  selector: 'app-request-details',
  templateUrl: '../../templates/request-details/request-details.component.html',
  styleUrls: ['../../../assets/styles/request-details.component.css']
})
export class RequestDetailsComponent implements OnInit {
  selectedRowData: TimeOffRequest;
  isNextMonth: boolean = false;

  constructor(private router: Router, private requestListService: RequestListService) {
    this.selectedRowData = new TimeOffRequest;
  }

  ngOnInit() {
    if (this.requestListService.getRowData() != null) {
      this.selectedRowData = this.requestListService.getRowData();
    } else {
      this.selectedRowData = new TimeOffRequest;
    }
    this.showSecondCalendar();
  }

  showSecondCalendar() {
    if (new Date(this.selectedRowData.dateStart).getMonth() != new Date(this.selectedRowData.dateFinish).getMonth()) {
      this.isNextMonth = true;
    }
  }

  goBack(): void {
    this.router.navigate(['/list']);
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
}

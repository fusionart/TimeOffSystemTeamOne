import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { User } from '../../models/user';
import { Request } from '../../models/request';
import { RequestListService } from '../../services/request-list.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-requests-list',
  templateUrl: '../../templates/request-list.component/requests-list.component.html',
  styleUrls: ['../../../assets/styles/requests-list.component.css']
})
export class RequestsListComponent implements OnInit {
  requests: Request[] = [];
  user: User;

  constructor(
    private requestListService: RequestListService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.requestListService.getUser(1).then(user => (this.user = user));
    this.requestListService
      .getRequests()
      .then(requests => (this.requests = requests));
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
}


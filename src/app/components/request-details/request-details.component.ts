import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-details',
  templateUrl: '../../templates/request-details/request-details.component.html',
  styleUrls: ['../../../assets/styles/request-details.component.css']
})
export class RequestDetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack(): void {
    this.router.navigate(['/list']);
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { RequestsListComponent } from './requests-list.component';
import { RequestsListRoutes } from './requests-list.routing';

@NgModule({
  declarations: [
    RequestsListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RequestsListRoutes
  ],
  providers: []
})
export class RequestsListModule { }
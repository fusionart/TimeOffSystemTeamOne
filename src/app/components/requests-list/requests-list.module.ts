import { DataTableModule, ContextMenuModule, DropdownModule } from 'primeng/primeng';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { RequestsListComponent } from './requests-list.component';
import { RequestsListRoutes } from './requests-list.routing';
import { RequestListService } from '../../services/request-list/request-list.service';

@NgModule({
  declarations: [
    RequestsListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RequestsListRoutes,
    DataTableModule,
    DropdownModule,
    ContextMenuModule
  ],
  providers: [RequestListService]
})
export class RequestsListModule { }

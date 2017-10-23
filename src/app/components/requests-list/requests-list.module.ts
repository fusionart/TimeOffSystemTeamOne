import { DataTableModule, ContextMenuModule, DropdownModule } from 'primeng/primeng';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RequestsListComponent } from './requests-list.component';
import { RequestsListRoutes } from './requests-list.routing';
import { RequestListService } from '../../services/request-list/request-list.service'
import { AuthGuard } from '../../guards/authentication-guard';

@NgModule({
  declarations: [
    RequestsListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RequestsListRoutes,
    FormsModule,
    ReactiveFormsModule,
    DataTableModule,
    DropdownModule,
    ContextMenuModule
  ],
  providers: [
    RequestListService,
    AuthGuard
  ]
})
export class RequestsListModule { }

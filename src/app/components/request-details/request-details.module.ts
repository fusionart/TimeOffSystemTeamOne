import { RequestListService } from './../../services/request-list/request-list.service';
import { CalendarService } from './../../services/calendar/calendar.service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RequestDetailsRoute } from './request-details.route';
import { CalendarModule } from 'primeng/primeng';
import { TabViewModule } from 'primeng/primeng';
import { CodeHighlighterModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarNModule } from '../calendar/calendar.module';

import { RequestDetailsComponent } from './request-details.component';

@NgModule({
    declarations: [
        RequestDetailsComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TabViewModule,
        CodeHighlighterModule,
        RequestDetailsRoute,
        CalendarModule,
        BrowserAnimationsModule,
        CalendarNModule
    ],
    providers: [
        RequestListService
    ],
    exports: [
        RequestDetailsComponent
    ],
})
export class RequestDetailsModule { }
import { CreateRequestService } from './../../services/create-request/create-request.service';
import { DropdownNModule } from './../dropdown/dropdown.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CreateRequestRoute } from './create-request.route';
import { CalendarModule } from 'primeng/primeng';
import { CalendarNModule } from '../calendar/calendar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import { CreateRequestComponent } from './create-request.component';


@NgModule({
    declarations: [
        CreateRequestComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        CreateRequestRoute,
        CalendarModule,
        BrowserAnimationsModule,
        CalendarNModule,
        DropdownNModule
    ],
    providers: [CreateRequestService],
})
export class CreateRequestModule { }
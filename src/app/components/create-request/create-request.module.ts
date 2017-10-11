import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CreateRequestRoute } from './create-request.route';
import { CalendarModule } from 'primeng/primeng';
import { CalendarNModule } from '../calendar/calendar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CreateRequestComponent } from './create-request.component';


@NgModule({
    declarations: [
        CreateRequestComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        CreateRequestRoute,
        CalendarModule,
        BrowserAnimationsModule,
        CalendarNModule
    ],
    providers: [

    ],
})
export class CreateRequestModule { }
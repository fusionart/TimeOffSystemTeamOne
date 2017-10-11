import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CalendarRoute } from './calendar.route';
import { CalendarModule } from 'primeng/primeng';
import { TabViewModule } from 'primeng/primeng';
import { CodeHighlighterModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CalendarComponent } from './calendar.component';

@NgModule({
    declarations: [
        CalendarComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TabViewModule,
        CodeHighlighterModule,
        CalendarRoute,
        CalendarModule,
        BrowserAnimationsModule
    ],
    providers: [

    ],
    exports: [
        CalendarComponent
    ],
})
export class CalendarNModule { }
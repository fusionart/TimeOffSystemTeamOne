import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CreateRequestRoute } from './create-request.route';

import { CreateRequestComponent } from './create-request.component'


@NgModule({
    declarations: [
        CreateRequestComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        CreateRequestRoute
    ],
    providers: [

    ],
})
export class CreateRequestModule { }
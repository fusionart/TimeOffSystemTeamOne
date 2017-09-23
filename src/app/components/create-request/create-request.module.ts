import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CreateRequestRoute } from './create-request.route';

import { CreateRequestComponent } from './create-request.component'

@NgModule({
    declarations: [
        CreateRequestComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        CreateRequestRoute
    ],
    providers: [

    ],
})
export class CreateRequestModule { }
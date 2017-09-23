import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputFieldsRoute } from './input-fields.route';

import {CreateRequestComponent } from './create-request.component'

@NgModule({
  declarations: [
    CreateRequestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    InputFieldsRoute
  ],
  providers: [
      
    ],
})
export class CreateRequestModule { }
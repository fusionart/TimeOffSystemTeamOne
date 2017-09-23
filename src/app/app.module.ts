import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { CreateRequestModule } from './components/create-request/create-request.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    CreateRequestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

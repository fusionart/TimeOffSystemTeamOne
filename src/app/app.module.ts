import { RequestDetailsModule } from './components/request-details/request-details.module';
import { DropdownNModule } from './components/dropdown/dropdown.module';
import { CalendarModule } from 'primeng/primeng';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RegisterFormModule } from './components/register-form/register-form.module';

import { CreateRequestModule } from './components/create-request/create-request.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RequestsListModule } from './components/requests-list/requests-list.module';
import { CalendarNModule } from './components/calendar/calendar.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    RegisterFormModule,
    CreateRequestModule,
    RequestsListModule,
    CalendarNModule,
    CalendarModule,
    DropdownNModule,
    RequestDetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

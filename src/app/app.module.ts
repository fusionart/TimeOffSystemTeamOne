import { DropdownNModule } from './components/dropdown/dropdown.module';
import { CalendarModule } from 'primeng/primeng';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RegisterFormModule } from './components/register-form/register-form.module';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';

import { CreateRequestModule } from './components/create-request/create-request.module';
import { AlertComponent } from './components/alert/alert.component';

import { RequestsListModule } from './components/requests-list/requests-list.module';
import { CalendarNModule } from './components/calendar/calendar.module';
import { LoginFormModule } from './components/login-form/login-form.module';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent
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
    LoginFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { RequestDetailsModule } from './components/request-details/request-details.module';
import { DropdownNModule } from './components/dropdown/dropdown.module';
import { CalendarModule, DataTableModule } from 'primeng/primeng';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';

import { RegisterFormModule } from './components/register-form/register-form.module';
import { CreateRequestModule } from './components/create-request/create-request.module';
import { AlertComponent } from './components/alert/alert.component';
import { RequestsListModule } from './components/requests-list/requests-list.module';
import { CalendarNModule } from './components/calendar/calendar.module';
import { LoginFormModule } from './components/login-form/login-form.module';
import { AlertService} from './services/alert/alert.service';
import { AuthenticationService } from './services/authentication/authentication.service';
import { UserService } from './services/user/user.service';

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
    DataTableModule,
    DropdownNModule,
    RequestDetailsModule,
    DropdownNModule,
    LoginFormModule
  ],
  providers: [
    AlertService,
    AuthenticationService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes'

import { LoginFormComponent } from './components/login-form/login-form.component';
import { RequestsListModule } from './components/requests-list/requests-list.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    RequestsListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

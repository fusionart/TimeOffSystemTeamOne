import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { CreateRequestModule } from './components/create-request/create-request.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes'
<<<<<<< HEAD
=======

import { LoginFormComponent } from './components/login-form/login-form.component';
import { RequestsListModule } from './components/requests-list/requests-list.module';
>>>>>>> bca37a6102db73c71dff651f0b184f196258e27c

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutes,
<<<<<<< HEAD
    CreateRequestModule
=======
    RequestsListModule,
>>>>>>> bca37a6102db73c71dff651f0b184f196258e27c
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

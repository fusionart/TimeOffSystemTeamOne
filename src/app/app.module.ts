import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateRequestModule } from './components/create-request/create-request.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CreateRequestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

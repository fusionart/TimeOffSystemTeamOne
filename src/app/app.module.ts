import { AppRoutes } from './app.routes';
import { LoginModule } from './components/login/login.module';
import { LoginComponent } from './components/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutes,
    BrowserModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

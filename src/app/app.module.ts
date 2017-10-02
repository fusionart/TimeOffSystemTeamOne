import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RegisterFormModule } from './components/register-form/register-form.module';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    RegisterFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

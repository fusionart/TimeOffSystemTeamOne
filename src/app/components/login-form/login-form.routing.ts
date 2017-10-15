import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginFormComponent } from './login-form.component';

export const appRoutes: Routes  = [
  { path: 'login', component: LoginFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule]
  })
  
  export class LoginFormRoutes { }
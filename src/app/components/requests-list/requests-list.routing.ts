import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RequestsListComponent } from './requests-list.component';
import { LoginFormComponent } from '../login-form/login-form.component';

export const appRoutes: Routes = [
  { path: 'list', component: RequestsListComponent },
  { path: 'createRequest', component: LoginFormComponent }
];

@NgModule({
imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
exports: [RouterModule]
})

export class RequestsListRoutes { }

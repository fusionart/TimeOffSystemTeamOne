import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RequestsListComponent } from './requests-list.component';
import { AuthGuard } from '../../guards/authentication-guard';

export const appRoutes: Routes = [
  { path: 'list', component: RequestsListComponent, canActivate: [AuthGuard]}
];

@NgModule({
imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
exports: [RouterModule]
})

export class RequestsListRoutes { }

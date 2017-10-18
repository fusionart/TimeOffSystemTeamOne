import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { RegisterFormComponent } from './register-form.component';
import { AuthGuard } from '../../guards/authentication-guard';

export const appRoutes: Routes = [
    { path: 'register-form', component: RegisterFormComponent, canActivate: [AuthGuard] }
];

@NgModule({
imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
exports: [RouterModule]
})

export class RegisterFormRoutes { }
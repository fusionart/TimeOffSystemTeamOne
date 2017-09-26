import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const loginRoutes: Routes = [
    { path: 'login', component: LoginComponent}
];

@NgModule ({
    imports: [RouterModule.forRoot(loginRoutes, { useHash: true })],
    exports: [RouterModule]
})

export class LoginRoutes { }

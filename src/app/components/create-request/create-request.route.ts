import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CreateRequestComponent } from './create-request.component';
import { AuthGuard } from '../../guards/authentication-guard';

export const appRoutes: Routes = [
    { path: 'createRequest', component: CreateRequestComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]
})

export class CreateRequestRoute {
}

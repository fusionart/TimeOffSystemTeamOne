import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestDetailsComponent } from './request-details.component';

export const appRoutes: Routes = [{
    path: 'request-details', component: RequestDetailsComponent
}];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]
})
export class RequestDetailsRoute { }
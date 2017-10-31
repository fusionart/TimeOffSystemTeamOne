import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel.component';
import { AuthGuard } from '../../guards/authentication-guard';

export const appRoutes: Routes = [{
    path: 'admin-panel', component: AdminPanelComponent, canActivate: [AuthGuard]
}];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]
})
export class AdminPanelRoute { }
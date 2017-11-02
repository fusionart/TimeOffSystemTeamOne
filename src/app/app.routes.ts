import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const appRoutes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]
})

export class AppRoutes {
}

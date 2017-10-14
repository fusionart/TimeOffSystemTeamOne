import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DropdownComponent } from './dropdown.component';

export const appRoutes: Routes = [{
    path: 'dropdown', component: DropdownComponent
}];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]
})
export class DropdownRoute { }
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DropdownModule } from 'primeng/primeng';
import { DropdownRoute } from './dropdown.route';

import { DropdownComponent } from './dropdown.component';

@NgModule({
    declarations: [
        DropdownComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        DropdownModule,
        DropdownRoute
    ],
    providers: [
        
    ],
    exports: [
        DropdownComponent
    ],
})
export class DropdownNModule { }
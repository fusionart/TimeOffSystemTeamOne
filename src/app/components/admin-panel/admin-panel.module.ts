import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AdminPanelRoute } from './admin-panel.route';

import { AdminPanelComponent } from './admin-panel.component';
import { DataTableModule, DropdownModule, DialogModule } from 'primeng/primeng';

@NgModule({
    declarations: [
        AdminPanelComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DataTableModule,
        DropdownModule,
        DialogModule,
        AdminPanelRoute
    ],
    providers: [
        
    ],
    exports: [
        
    ],
})
export class AdminPanelModule { }
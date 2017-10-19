import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AdminPanelRoute } from './admin-panel.route';

import { AdminPanelComponent } from './admin-panel.component';

@NgModule({
    declarations: [
        AdminPanelComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        
    ],
    exports: [
        
    ],
})
export class AdminPanelModule { }
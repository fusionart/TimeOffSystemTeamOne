import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AdminPanelRoute } from './admin-panel.route';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AdminPanelComponent } from './admin-panel.component';
import { DataTableModule, DropdownModule, DialogModule } from 'primeng/primeng';
import { AdminPanelService } from '../../services/admin-panel/admin-panel.service';
import { RequestListService } from '../../services/request-list/request-list.service';

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
        AdminPanelRoute,
        NgbModule.forRoot()
    ],
    providers: [
        RequestListService,
        AdminPanelService
    ],
    exports: [
        
    ],
})
export class AdminPanelModule { }
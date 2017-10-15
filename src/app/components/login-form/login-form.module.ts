import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { LoginFormComponent } from "./login-form.component";
import { LoginFormRoutes } from "./login-form.routing";
import { LoginFormService } from "../../services/login-form/login-form.service";

@NgModule({
    imports: [
        CommonModule, 
        BrowserModule, 
        LoginFormRoutes
    ],
    declarations: [
        LoginFormComponent
    ],
    providers: [
        LoginFormService
    ]
})
export class LoginFormModule {}

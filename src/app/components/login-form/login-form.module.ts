import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { LoginFormComponent } from "./login-form.component";
import { LoginFormRoutes } from "./login-form.routing";
import { LoginFormService } from "../../services/login-form/login-form.service";
import { AlertService } from '../../services/alert/alert.service';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { UserService } from '../../services/user/user.service';
import { ApiRequestService } from '../../services/api-request/api-request.service'

@NgModule({
    imports: [
        CommonModule, 
        BrowserModule, 
        LoginFormRoutes,
        HttpModule, 
        FormsModule,
        JsonpModule
    ],
    declarations: [
        LoginFormComponent
    ],
    providers: [
        LoginFormService,
        AlertService,
        AuthenticationService,
        UserService,
        ApiRequestService
    ]
})
export class LoginFormModule {}

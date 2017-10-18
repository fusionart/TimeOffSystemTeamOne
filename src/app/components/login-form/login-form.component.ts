import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { AlertService } from "../../services/alert/alert.service";
import { AuthenticationService } from "../../services/authentication/authentication.service";

@Component({
  selector: "app-login-form",
  templateUrl: "../../templates/login-form.component/login-form.component.html",
  styleUrls: ["../../../assets/styles/login-form.component.css"]
})
export class LoginFormComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
    this.authenticationService.logout();
  }

  login() {
    this.loading = true;
    this.authenticationService
      .login(this.model.username, this.model.password)
      .subscribe(
        data => {
          this.router.navigate(['/list']);
        },
        error => {
          this.alertService.error('Username or password is incorrect');
          this.loading = false;
        }
      );
  }
}
   
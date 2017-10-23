import { Component } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
  isAdministrator: boolean;

  get userName(): any {
    if (localStorage.getItem("currentUser") != null) {
      return JSON.parse(localStorage.getItem("currentUser")).username;
    } else {
      ;
      return false;
    }
  }
  get isAdmin(): any {
    if (localStorage.getItem("currentUser") != null && localStorage.getItem("currentUserDetails") != null) {
      this.isAdministrator = JSON.parse(localStorage.getItem("currentUserDetails")).admin;
      //console.log(this.isAdministrator);
      if (this.isAdministrator) {
        return "You have administrative rights";
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  get userId(): any {
    if (localStorage.getItem("currentUser") != null && localStorage.getItem("currentUserDetails") != null) {
      return JSON.parse(localStorage.getItem("currentUserDetails")).userId;
    } else {
      return false;
    }
  }

}
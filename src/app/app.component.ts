import { Component } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
  showUsername: boolean = false;

  get userName(): any {
    if (localStorage.getItem("currentUser") != null) {
      this.showUsername = true;
      return JSON.parse(localStorage.getItem("currentUser")).username;
    } else {
      return false;
    }
  }
}

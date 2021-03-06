import { Injectable } from "@angular/core";

export interface UserInStorage {
  userId: string;
  email: string;
  displayName: string;
  token: string;
}

export interface LoginInfoInStorage {
  success: boolean;
  message: string;
  landingPage: string;
  user?: UserInStorage;
}

@Injectable()
export class UserService {
  public currentUserKey: string = "currentUser";
  public currentUserDetailsKey: string = "currentUserDetails";
  public storage: Storage = localStorage; 
  constructor() {}

  //Store userinfo from local storage
  storeUserInfo(userInfoString: string) {
    this.storage.setItem(this.currentUserKey, userInfoString);
  }

  //Remove userinfo from local storage
  removeUserInfo() {
    localStorage.removeItem(this.currentUserKey);
  }

  //Get userinfo from local storage
  getUserInfo(): UserInStorage | null {
    try {
      let userInfoString: string = this.storage.getItem(this.currentUserKey);
      if (userInfoString) {
        let userObj: UserInStorage = JSON.parse(
          this.storage.getItem(this.currentUserKey)
        );
        return userObj;
      } else {
        return null;
      }
    } catch (e) {
      return null;
    }
  }

  isLoggedIn(): boolean {
    return this.storage.getItem(this.currentUserKey) ? true : false;
  }

  //Get User's Display name from local storage
  getUserName(): string {
    let userObj: UserInStorage = this.getUserInfo();
    if (userObj !== null) {
      return userObj.displayName;
    }
    return "no-user";
  }

  get userId(): number | null {
    if (localStorage.getItem(this.currentUserDetailsKey) != null) {
      return JSON.parse(localStorage.getItem(this.currentUserDetailsKey)).userId;
    } else {
      return null;
    }
  }

  getStoredToken(): string | null {
    let userObj: UserInStorage = this.getUserInfo();
    if (userObj !== null) {
      return userObj.token;
    }
    return null;
  }
}

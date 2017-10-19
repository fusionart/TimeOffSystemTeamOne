import { Injectable } from '@angular/core';
import {
    Router,
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log("AuthGuard activated");
        
        if (localStorage.getItem('currentUser')) {
            console.log(" ИМА ЛОГНАТ ПОТРЕБИТЕЛ !!!!!!!!!!!!!!!!!!!!!!!!!");
            
            return true;
        }

        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService} from '../services/authentication.service';
import {LoginComponent} from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate{

  constructor(private authenticationService: AuthenticationService, private router: Router) {

  }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('AcanActivate called');
    const isLoggedIn = this.authenticationService.isLoggedIn();
    if (isLoggedIn) {
      this.router.navigateByUrl('/home');
    }
    return isLoggedIn;
  }
}

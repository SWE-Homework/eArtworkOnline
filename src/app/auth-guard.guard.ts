

import { Injectable } from '@angular/core';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';

import { Observable } from 'rxjs';
import {UserService} from "./service/user.service";



@Injectable(
  {
    providedIn: 'root'
  }
)

export class AuthGuardGuard implements CanActivate {





  constructor(private _authService: UserService, private _router: Router) {

  }



  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this._authService.isLoggedIn) {

      return true;

    }



    // navigate to login page

    this._router.navigate(['login'], {skipLocationChange: true})

    // you can save redirect url so after authing we can move them back to the page they requested

    return false;

  }



}

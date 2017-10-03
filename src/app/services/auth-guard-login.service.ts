import { AuthService } from './auth.service';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable()
export class AuthGuardLogin implements CanActivate {

  constructor(public auth: AuthService,
              private roter: Router) { }
  
  canActivate() {
    return this.auth.loggedIn;
  }

}
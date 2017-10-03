import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuardAdmin implements CanActivate {

  constructor(public auth: AuthService,
              private router: Router) { }

  canActivate() {
    return this.auth.isAdmin;
  }

}

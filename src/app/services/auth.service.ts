import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';

import { UserService } from '../services/user.service';

@Injectable()
export class AuthService {

    loggedIn = false;
    isAdmin = false;

    jwtHelper: JwtHelper = new JwtHelper();

    currentUser = {_id: '', username: '', role: ''};

    

}
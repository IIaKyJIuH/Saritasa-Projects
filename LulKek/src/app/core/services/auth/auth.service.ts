import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, take } from 'rxjs/operators';

import { AppConfig } from '../../app-config';

import { UserDTO } from './user-dto';
import { UserLoginParam } from './user-login-param';
import { UserModel } from './user-model';

***REMOVED****
***REMOVED*** Service that authorizes user at FireBase.
***REMOVED***/
@Injectable({
  providedIn: 'root',
})
export class AuthService {

***REMOVED***
 ***REMOVED*****REMOVED*** Email from last authorized user.
***REMOVED***
  private lastUserEmail = '';

***REMOVED***
 ***REMOVED*****REMOVED*** .сtor
 ***REMOVED*****REMOVED*** @param http - http client
***REMOVED***
  constructor(
    private http: HttpClient,
    private config: AppConfig,
  ) { }

***REMOVED***
 ***REMOVED*****REMOVED*** Posts user data to the server for authorization and set pair localStorage[email]='idToken'.
 ***REMOVED*****REMOVED*** @param user - interface that includes user email and password.
***REMOVED***
  public login(user: UserLoginParam): void {
    const body = { email: user.email, password: user.password, returnSecureToken: true***REMOVED*****REMOVED***
    this.lastUserEmail = user.email;
    this.http.post<UserDTO>(`${this.config.API_URL}/verifyPassword`, body).pipe(
      map(response =>  new UserModel(response)),
      take(1),
    ).subscribe(userJson => {
      localStorage.setItem(userJson.email, userJson.idToken);
    });
  }

***REMOVED***
 ***REMOVED*****REMOVED*** Deletes userToken => log outs him from system.
***REMOVED***
  public logout(): void {
    localStorage.setItem(this.lastUserEmail, null);
    this.lastUserEmail = '';
  }

***REMOVED***
 ***REMOVED*****REMOVED*** Checks if the specified user is logged in.
 ***REMOVED*****REMOVED*** @param email - user email.
 ***REMOVED*****REMOVED*** @returns if the local storage has token by email - true, else - false.
***REMOVED***
  public isLoggedIn(email: string): boolean {
    return this.getToken(email) !== null;
  }

***REMOVED***
 ***REMOVED*****REMOVED*** Returns token by user email if he was(for now 'was', but later it will be 'is') logged in.
 ***REMOVED*****REMOVED*** @param email - user email.
 ***REMOVED*****REMOVED*** @returns user token.
***REMOVED***
  public getToken(email: string = this.lastUserEmail): string {
    return localStorage.getItem(email);
  }

}

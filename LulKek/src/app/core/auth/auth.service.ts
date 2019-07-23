import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserModel } from './userModel';
import { UserLoginParam } from './userparam';

***REMOVED****
***REMOVED*** Service that authorizes user at FireBase.
***REMOVED***/
@Injectable({
  providedIn: 'root',
})
export class AuthService {

***REMOVED***
 ***REMOVED*****REMOVED*** Web-API key of my DB from FireBase.
***REMOVED***
  public API_KEY = 'AIzaSyDeTMW8OEatIfvUd2t9cLuNhqZd0XOof0o';

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
  ) { }

***REMOVED***
 ***REMOVED*****REMOVED*** Posts user data to the server for authorization and returning observable object.
 ***REMOVED*****REMOVED***
 ***REMOVED*****REMOVED*** @param user - interface that includes user email and password.
 ***REMOVED*****REMOVED*** @returns server response.
***REMOVED***
  public login(user: UserLoginParam): Observable<UserModel> {
    const body = { email: user.email, password: user.password, returnSecureToken: true***REMOVED*****REMOVED***
    this.lastUserEmail = user.email;
    return this.http.post<UserModel>(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword`, body);
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
 ***REMOVED*****REMOVED***
 ***REMOVED*****REMOVED*** @param email - user email.
 ***REMOVED*****REMOVED*** @returns if the local storage has token by email - true, else - false.
***REMOVED***
  public isLoggedIn(email: string): boolean {
    return this.getToken(email) === null ? false : true;
  }

***REMOVED***
 ***REMOVED*****REMOVED*** Returns token by user email if he was(for now 'was', but later it will be 'is') logged in.
 ***REMOVED*****REMOVED***
 ***REMOVED*****REMOVED*** @param email - user email.
 ***REMOVED*****REMOVED*** @returns user token.
***REMOVED***
  public getToken(email: string = this.lastUserEmail): string {
    return localStorage.getItem(email);
  }

}

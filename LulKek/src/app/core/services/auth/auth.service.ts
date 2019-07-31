import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

import { AppConfig } from '../../app-config';
import { UserDto } from '../dtos/user-dto';
import { UserModel } from '../models/user-model';

import { UserLoginParam } from './user-login-param';

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
  public login(user: UserLoginParam): Observable<UserModel> {
    const body = { email: user.email, password: user.password, returnSecureToken: true***REMOVED*****REMOVED***
    this.lastUserEmail = user.email;
    return this.http.post<UserDto>(`${this.config.API_URL}/verifyPassword`, body).pipe(
      map(response =>  this.createUserModelByDto(response)),
      tap((userModel: UserModel) => localStorage.setItem(userModel.email, userModel.idToken),
      take(1),
    ));
  }

  private createUserModelByDto(userDto: UserDto): UserModel {
    return new UserModel({
      email: userDto.email,
      idToken: userDto.idToken,
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

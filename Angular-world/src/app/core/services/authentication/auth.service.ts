import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

import { AppConfig } from '../../app-config';
import { UserDto } from '../dtos/user-dto';
import { UserTokensDto } from '../dtos/user-tokens-dto';
import { UserModel } from '../models/user-model';
import { UserTokens } from '../models/user-tokens';

import { UserLoginParam } from './user-login-param';

***REMOVED****
***REMOVED*** Service that authorizes user at FireBase.
***REMOVED***/
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
***REMOVED***
  ***REMOVED*** Refers to access token from Firebase API.
***REMOVED***
  private ID_TOKEN = 'idToken';

***REMOVED***
  ***REMOVED*** Refers to secure token from Firebase API.
***REMOVED***
  private SECURE_TOKEN = 'secureToken';

***REMOVED***
  ***REMOVED*** .сtor
  ***REMOVED*** @param http - http client
***REMOVED***
  constructor(private http: HttpClient, private config: AppConfig) {}

***REMOVED***
  ***REMOVED*** Posts user data to the server for authorization and set pair localStorage[email]='idToken'.
  ***REMOVED*** @param user - interface that includes user email and password.
  ***REMOVED*** @returns
***REMOVED***
  public login(user: UserLoginParam): Observable<UserModel> {
    const body = {
      email: user.email,
      password: user.password,
      returnSecureToken: true,
   ***REMOVED*****REMOVED***
    return this.http
      .post<UserDto>(`${this.config.API_URL}/verifyPassword`, body)
      .pipe(
        map(response => this.mapUserDtoToUser(response)),
        tap((userModel: UserModel) => this.storeTokens(userModel), take(1)),
      );
  }

***REMOVED***
  ***REMOVED*** Saves user tokens in the local storage for further refreshing.
  ***REMOVED*** @param user - user email and his tokens.
***REMOVED***
  public storeTokens(user: UserModel | UserTokens): void {
    localStorage.setItem(this.ID_TOKEN, user.idToken);
    localStorage.setItem(this.SECURE_TOKEN, user.secureToken);
  }

***REMOVED***
  ***REMOVED*** Maps object from database to it`s usable model.
  ***REMOVED*** @returns usable user model for this app.
***REMOVED***
  private mapUserDtoToUser(userDto: UserDto): UserModel {
    return new UserModel({
      email: userDto.email,
      idToken: userDto.idToken,
      secureToken: userDto.refreshToken,
    });
  }

***REMOVED***
  ***REMOVED*** Deletes userToken => log outs him from system.
***REMOVED***
  public logout(): void {
    localStorage.removeItem(this.ID_TOKEN);
    localStorage.removeItem(this.SECURE_TOKEN);
  }

***REMOVED***
  ***REMOVED*** Gets access token for authorization needs.
  ***REMOVED*** @returns access token for getting some data from the database.
***REMOVED***
  public getAccessToken(): string {
    return localStorage.getItem(this.ID_TOKEN);
  }

***REMOVED***
  ***REMOVED*** Refreshes both access and secure tokens.
  ***REMOVED*** @returns observable of new access and secure tokens.
***REMOVED***
  public refreshToken(): Observable<UserTokens> {
    return this.http
      .post(this.config.REFRESH_SECURE_TOKEN_URL, {
        grant_type: 'refresh_token',
        refresh_token: localStorage.getItem(this.SECURE_TOKEN),
      })
      .pipe(
        map((response: UserTokensDto) => {
          const userTokens = this.mapUserTokensDtoToUserTokens(response);
          return userTokens;
        }),
      );
  }

***REMOVED***
  ***REMOVED*** Maps tokens from their presentation in the Db to the usable app model.
  ***REMOVED*** @param userTokens - access and secure user tokens.
***REMOVED***
  private mapUserTokensDtoToUserTokens(userTokens: UserTokensDto): UserTokens {
    return new UserTokens({
      idToken: userTokens.idToken,
      secureToken: userTokens.refreshToken,
    });
  }

***REMOVED***
  ***REMOVED*** Checks if the current user is logged in.
  ***REMOVED*** @returns if there is userEmail - true, else - false.
***REMOVED***
  public isLoggedIn(): boolean {
    return (
      localStorage.getItem(this.ID_TOKEN) !== null &&
      localStorage.getItem(this.SECURE_TOKEN) !== null
    );
  }

***REMOVED***
  ***REMOVED*** For toggling admin status. WILL BE FIXED LATER.
***REMOVED***
  public toggleAdminStatus(): void {
    const toggling = localStorage.getItem('isAdmin') === 'false' ? true : false;
    localStorage.setItem('isAdmin', toggling.toString());
  }
}

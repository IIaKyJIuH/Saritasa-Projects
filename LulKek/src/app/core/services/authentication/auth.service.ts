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
 ***REMOVED*****REMOVED*** Refers to access token from Firebase API.
***REMOVED***
  private ID_TOKEN = 'idToken';

***REMOVED***
 ***REMOVED*****REMOVED*** Refers to secure token from Firebase API.
***REMOVED***
  private SECURE_TOKEN = 'secureToken';

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
 ***REMOVED*****REMOVED*** @returns
***REMOVED***
  public login(user: UserLoginParam): Observable<UserModel> {
    const body = { email: user.email, password: user.password, returnSecureToken: true***REMOVED*****REMOVED***
    return this.http.post<UserDto>(`${this.config.API_URL}/verifyPassword`, body).pipe(
      map(response =>  this.mapUserDtoToUser(response)),
      tap((userModel: UserModel) => this.storeTokens(userModel),
      take(1),
    ));
  }

***REMOVED***
 ***REMOVED*****REMOVED*** Saves user tokens in the local storage for further refreshing.
 ***REMOVED*****REMOVED*** @param user - user email and his tokens.
***REMOVED***
  public storeTokens(user: UserModel | UserTokens): void {
    localStorage.setItem(this.ID_TOKEN, user.idToken);
    localStorage.setItem(this.SECURE_TOKEN, user.secureToken);
  }

***REMOVED***
 ***REMOVED*****REMOVED*** Maps object from database to it`s usable model.
 ***REMOVED*****REMOVED*** @returns usable user model for this app.
***REMOVED***
  private mapUserDtoToUser(userDto: UserDto): UserModel {
    return new UserModel({
      email: userDto.email,
      idToken: userDto.idToken,
      secureToken: userDto.refreshToken,
    });
  }

***REMOVED***
 ***REMOVED*****REMOVED*** Deletes userToken => log outs him from system.
***REMOVED***
  public logout(): void {
    localStorage.removeItem(this.ID_TOKEN);
    localStorage.removeItem(this.SECURE_TOKEN);
  }

***REMOVED***
 ***REMOVED*****REMOVED*** Gets access token for authorization needs.
 ***REMOVED*****REMOVED*** @returns access token for getting some data from the database.
***REMOVED***
  public getAccessToken(): string {
    return localStorage.getItem(this.ID_TOKEN);
  }

***REMOVED***
 ***REMOVED*****REMOVED*** Refreshes both access and secure tokens.
 ***REMOVED*****REMOVED*** @returns observable of new access and secure tokens.
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
 ***REMOVED*****REMOVED*** Maps tokens from their presentation in the Db to the usable app model.
 ***REMOVED*****REMOVED*** @param userTokens - access and secure user tokens.
***REMOVED***
  private mapUserTokensDtoToUserTokens(userTokens: UserTokensDto): UserTokens {
    return new UserTokens({
      idToken: userTokens.idToken,
      secureToken: userTokens.refreshToken,
    });
  }

***REMOVED***
 ***REMOVED*****REMOVED*** Checks if the current user is logged in.
 ***REMOVED*****REMOVED*** @returns if there is userEmail - true, else - false.
***REMOVED***
  public isLoggedIn(): boolean {
    return localStorage.getItem(this.ID_TOKEN) !== undefined &&
     localStorage.getItem(this.SECURE_TOKEN) !== undefined;
  }

}

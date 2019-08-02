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

/**
 * Service that authorizes user at FireBase.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  /**
   * Refers to access token from Firebase API.
   */
  private ID_TOKEN = 'idToken';

  /**
   * Refers to secure token from Firebase API.
   */
  private SECURE_TOKEN = 'secureToken';

  /**
   * .сtor
   * @param http - http client
   */
  constructor(
    private http: HttpClient,
    private config: AppConfig,
  ) { }

  /**
   * Posts user data to the server for authorization and set pair localStorage[email]='idToken'.
   * @param user - interface that includes user email and password.
   * @returns
   */
  public login(user: UserLoginParam): Observable<UserModel> {
    const body = { email: user.email, password: user.password, returnSecureToken: true };
    return this.http.post<UserDto>(`${this.config.API_URL}/verifyPassword`, body).pipe(
      map(response =>  this.mapUserDtoToUser(response)),
      tap((userModel: UserModel) => this.storeTokens(userModel),
      take(1),
    ));
  }

  /**
   * Saves user tokens in the local storage for further refreshing.
   * @param user - user email and his tokens.
   */
  public storeTokens(user: UserModel | UserTokens): void {
    localStorage.setItem(this.ID_TOKEN, user.idToken);
    localStorage.setItem(this.SECURE_TOKEN, user.secureToken);
  }

  /**
   * Maps object from database to it`s usable model.
   * @returns usable user model for this app.
   */
  private mapUserDtoToUser(userDto: UserDto): UserModel {
    return new UserModel({
      email: userDto.email,
      idToken: userDto.idToken,
      secureToken: userDto.refreshToken,
    });
  }

  /**
   * Deletes userToken => log outs him from system.
   */
  public logout(): void {
    localStorage.removeItem(this.ID_TOKEN);
    localStorage.removeItem(this.SECURE_TOKEN);
  }

  /**
   * Gets access token for authorization needs.
   * @returns access token for getting some data from the database.
   */
  public getAccessToken(): string {
    return localStorage.getItem(this.ID_TOKEN);
  }

  /**
   * Refreshes both access and secure tokens.
   * @returns observable of new access and secure tokens.
   */
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

  /**
   * Maps tokens from their presentation in the Db to the usable app model.
   * @param userTokens - access and secure user tokens.
   */
  private mapUserTokensDtoToUserTokens(userTokens: UserTokensDto): UserTokens {
    return new UserTokens({
      idToken: userTokens.idToken,
      secureToken: userTokens.refreshToken,
    });
  }

  /**
   * Checks if the current user is logged in.
   * @returns if there is userEmail - true, else - false.
   */
  public isLoggedIn(): boolean {
    return localStorage.getItem(this.ID_TOKEN) !== undefined &&
     localStorage.getItem(this.SECURE_TOKEN) !== undefined;
  }

}

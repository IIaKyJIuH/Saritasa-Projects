import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, take } from 'rxjs/operators';

import { AppConfig } from '../../app-config';

import { UserDTO } from './user-dto';
import { UserLoginParam } from './user-login-param';
import { UserModel } from './user-model';

/**
 * Service that authorizes user at FireBase.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  /**
   * Email from last authorized user.
   */
  private lastUserEmail = '';

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
   */
  public login(user: UserLoginParam): void {
    const body = { email: user.email, password: user.password, returnSecureToken: true };
    this.lastUserEmail = user.email;
    this.http.post<UserDTO>(`${this.config.API_URL}/verifyPassword`, body).pipe(
      map(response =>  new UserModel(response)),
      take(1),
    ).subscribe(userJson => {
      localStorage.setItem(userJson.email, userJson.idToken);
    });
  }

  /**
   * Deletes userToken => log outs him from system.
   */
  public logout(): void {
    localStorage.setItem(this.lastUserEmail, null);
    this.lastUserEmail = '';
  }

  /**
   * Checks if the specified user is logged in.
   * @param email - user email.
   * @returns if the local storage has token by email - true, else - false.
   */
  public isLoggedIn(email: string): boolean {
    return this.getToken(email) !== null;
  }

  /**
   * Returns token by user email if he was(for now 'was', but later it will be 'is') logged in.
   * @param email - user email.
   * @returns user token.
   */
  public getToken(email: string = this.lastUserEmail): string {
    return localStorage.getItem(email);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserDTO } from './userDTO';
import { UserLoginParam } from './userparam';

/**
 * Service that authorizes user at FireBase.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  /**
   * Web-API key of my DB from FireBase.
   */
  public API_KEY = 'AIzaSyDeTMW8OEatIfvUd2t9cLuNhqZd0XOof0o';

  /**
   * Email from last authorized user.
   */
  private lastUserEmail = '';

  /**
   * .сtor
   *
   * @param http - http client
   */
  constructor(
    private http: HttpClient,
  ) { }

  /**
   * Posts user data to the server for authorization and returning observable object.
   *
   * @param user - interface that includes user email and password.
   * @returns server response.
   */
  public login(user: UserLoginParam): Observable<UserDTO> {
    const body = { email: user.email, password: user.password, returnSecureToken: true };
    this.lastUserEmail = user.email;
    return this.http.post<UserDTO>(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword`, body);
  }

  /**
   * Checks if the specified user is logged in.
   *
   * @param email - user email.
   * @returns if the local storage has token by email - true, else - false.
   */
  public isLoggedIn(email: string): boolean {
    return this.getToken(email) === undefined ? false : true;
  }

  /**
   * Returns token by user email if he was(for now 'was', but later it will be 'is') logged in.
   *
   * @param email - user email.
   * @returns user token.
   */
  public getToken(email: string = this.lastUserEmail): string {
    return localStorage.getItem(email);
  }

  public logout() {
    // TODO:
  }
}

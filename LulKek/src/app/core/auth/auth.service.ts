import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserDTO } from './userDTO';
import { UserLoginParam } from './userparam';

/**
 * Сервис, занимающийся авторизацией пользователя на сервере FireBase.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  /**
   * Web-API ключ моей БД FireBase
   */
  public API_KEY = 'AIzaSyDeTMW8OEatIfvUd2t9cLuNhqZd0XOof0o';

  private lastUserEmail = '';

  /**
   * .сtor
   *
   * @param http - клиент Http
   */
  constructor(
    private http: HttpClient,
  ) { }

  /**
   * Метод, отправляющий данные пользователя на сервер для авторизации и возвращающий Observable объект.
   *
   * @param user - интерфейс, имеющий в себе поля email и password пользователя.
   * @returns ответ от сервера.
   */
  public login(user: UserLoginParam): Observable<UserDTO> {
    const body = { email: user.email, password: user.password, returnSecureToken: true };
    this.lastUserEmail = user.email;
    return this.http.post<UserDTO>(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword`, body);
  }

  /**
   * Проверяет, залогинен ли пользователь с указанной почтой.
   *
   * @param email - почта пользователя.
   * @returns если есть токен в localStorage - да, нет - в противном случае.
   */
  public isLoggedIn(email: string): boolean {
    return this.getToken(email) === undefined ? false : true;
  }

  /**
   * Возвращает токен по почте пользователя, если он залогинен.
   *
   * @param email - почта пользователя.
   * @returns токен пользователя
   */
  public getToken(email: string = this.lastUserEmail): string {
    console.log(localStorage.getItem(email));
    return localStorage.getItem(email);
  }

  public logout() {
    // TODO:
  }
}

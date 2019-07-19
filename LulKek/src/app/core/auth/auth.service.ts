import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLoginParam } from './userparam';
import { UserDTO } from './userDTO';

/**
 * Класс, занимающийся авторизацией пользователя на сервере FireBase.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**
   * Web-API ключ моей БД FireBase
   */
  public API_KEY = 'AIzaSyDeTMW8OEatIfvUd2t9cLuNhqZd0XOof0o';

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
    return this.http.post<UserDTO>(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${this.API_KEY}`, body);
  }

  /**
   * Проверяет, залогинен ли пользователь с указанной почтой.
   *
   * @param email - почта пользователя.
   * @returns если есть токен в localStorage - да, нет - в противном случае.
   */
  public isLoggedIn(email: string): boolean {
    return localStorage.getItem(email) !== undefined;
  }

  public logout() {
    // TODO:
  }
}

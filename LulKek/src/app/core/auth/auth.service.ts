import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLoginParam } from './userparam';
import { UserDTO } from './userDTO';

***REMOVED****
***REMOVED*** Класс, занимающийся авторизацией пользователя на сервере FireBase.
***REMOVED***/
@Injectable({
  providedIn: 'root'
})
export class AuthService {

***REMOVED***
 ***REMOVED*****REMOVED*** Web-API ключ моей БД FireBase
***REMOVED***
  public API_KEY = 'AIzaSyDeTMW8OEatIfvUd2t9cLuNhqZd0XOof0o';

***REMOVED***
 ***REMOVED*****REMOVED*** .сtor
 ***REMOVED*****REMOVED***
 ***REMOVED*****REMOVED*** @param http - клиент Http
***REMOVED***
  constructor(
    private http: HttpClient,
  ) { }

***REMOVED***
 ***REMOVED*****REMOVED*** Метод, отправляющий данные пользователя на сервер для авторизации и возвращающий Observable объект.
 ***REMOVED*****REMOVED***
 ***REMOVED*****REMOVED*** @param user - интерфейс, имеющий в себе поля email и password пользователя.
 ***REMOVED*****REMOVED*** @returns ответ от сервера.
***REMOVED***
  public login(user: UserLoginParam): Observable<UserDTO> {
    const body = { email: user.email, password: user.password, returnSecureToken: true***REMOVED*****REMOVED***
    return this.http.post<UserDTO>(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${this.API_KEY}`, body);
  }

***REMOVED***
 ***REMOVED*****REMOVED*** Проверяет, залогинен ли пользователь с указанной почтой.
 ***REMOVED*****REMOVED***
 ***REMOVED*****REMOVED*** @param email - почта пользователя.
 ***REMOVED*****REMOVED*** @returns если есть токен в localStorage - да, нет - в противном случае.
***REMOVED***
  public isLoggedIn(email: string): boolean {
    return localStorage.getItem(email) !== undefined;
  }

  public logout() {
    // TODO:
  }
}

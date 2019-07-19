import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLoginParam } from './userparam';
import { UserDTO } from './userDTO';
import { Observable } from 'rxjs';

const API_KEY = 'AIzaSyDeTMW8OEatIfvUd2t9cLuNhqZd0XOof0o';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {

  }

***REMOVED***
 ***REMOVED*****REMOVED*** Метод, отправляющий данные пользователя на сервер для авторизации и возвращающий Observable объект
 ***REMOVED*****REMOVED***
 ***REMOVED*****REMOVED*** @param user - интерфейс, имеющий в себе поля email и password пользователя
 ***REMOVED*****REMOVED*** @returns наблюдаемый объект Observable<UserDTO>
***REMOVED***
  public login(user: UserLoginParam): Observable<UserDTO> {
    const body = { email: user.email, password: user.password, returnSecureToken: true***REMOVED*****REMOVED***
    return this.http.post<UserDTO>(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${API_KEY}`, body);
  }

***REMOVED***
 ***REMOVED*****REMOVED*** Метод получения JSON файла из БД
 ***REMOVED*****REMOVED***
 ***REMOVED*****REMOVED*** @param idToken - токен пользователя для получения информации из БД
 ***REMOVED*****REMOVED*** @returns Observable JSON объект, содержащий информацию из БД
***REMOVED***
  public getDBData(idToken: string): Observable<object> {
    return this.http.get(`https://proj-0-8c535.firebaseio.com/swapi.json?auth=${idToken}`);
  }

  public isLoggedIn() {
    // TODO:
  }

  public logout() {
    // TODO:
  }
}

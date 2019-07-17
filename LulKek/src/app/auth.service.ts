import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { switchMap } from 'rxjs/operators';

const API_KEY: string = 'AIzaSyDeTMW8OEatIfvUd2t9cLuNhqZd0XOof0o';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {

  }


  public login(userInfo: User) {
    const body = { email: userInfo.email, password: userInfo.password, returnSecureToken: true***REMOVED*****REMOVED***
    this.http.post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${API_KEY}`, body)
    .subscribe((response) => {
      this.http.get(`https://proj-0-8c535.firebaseio.com/swapi?auth=<${response.idToken}>`).subscribe();
    });
  }

  public isLoggedIn(){
    // TODO:
  }

  public logout(){
    // TODO:
  }
}

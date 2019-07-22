import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from '../auth/auth.service';

***REMOVED****
***REMOVED*** Интерцептор, преобразующий http запросы для упрощения обращения к БД
***REMOVED***/
@Injectable({
  providedIn: 'root',
})
export class TokenInterceptor implements HttpInterceptor {

constructor(public auth: AuthService) { }

***REMOVED****
***REMOVED*** Реализация интерфейса HttpInterceptor
***REMOVED***
***REMOVED*** @param request - пришедший запрос
***REMOVED*** @param next - проброска интерцептора следующему интерцептору
***REMOVED***/
public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

  request = request.method === 'POST' ?
    request = request.clone({
      params: request.params.set(
        'key',
        this.auth.API_KEY,
      ),
    }) :
    request.clone({
      params: request.params.set(
        'auth',
        this.auth.getToken(),
      ),
    });

  return next.handle(request);
}
}

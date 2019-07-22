import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

/**
 * Интерцептор, преобразующий http запросы для упрощения обращения к БД
 */
@Injectable({
  providedIn: 'root',
})
export class TokenInterceptor implements HttpInterceptor {

constructor(public auth: AuthService) { }

/**
 * Реализация интерфейса HttpInterceptor
 *
 * @param request - пришедший запрос
 * @param next - проброска интерцептора следующему интерцептору
 */
public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

  request = request.clone({
    params: request.params.set(
      'key',
      this.auth.API_KEY,
    ),
  });

  return next.handle(request);
}
}

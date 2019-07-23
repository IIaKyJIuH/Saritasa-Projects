import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from '../auth/auth.service';

/**
 * Interceptor transforming http requests to simplify all other requests to the DB.
 */
@Injectable({
  providedIn: 'root',
})
export class TokenInterceptor implements HttpInterceptor {

constructor(private auth: AuthService) { }

/**
 * HttpInterceptor realization.
 * @param request - incoming request.
 * @param next - command to transit modified http request to the next interceptor.
 */
public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

  if (request.method === 'POST') {
    return next.handle(request.clone({params: request.params.set('key', this.auth.API_KEY)}));
  } else {
    return next.handle(request.clone({params: request.params.set('auth', this.auth.getToken())}));
  }
}
}

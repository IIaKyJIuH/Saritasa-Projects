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
***REMOVED*** Interceptor transforming http requests to simplify all other requests to the DB.
***REMOVED***/
@Injectable({
  providedIn: 'root',
})
export class TokenInterceptor implements HttpInterceptor {

constructor(public auth: AuthService) { }

***REMOVED****
***REMOVED*** HttpInterceptor realization.
***REMOVED***
***REMOVED*** @param request - incoming request.
***REMOVED*** @param next - command to transit modified http request to the next interceptor.
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

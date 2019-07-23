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

constructor(private auth: AuthService) { }

***REMOVED****
***REMOVED*** HttpInterceptor realization.
***REMOVED*** @param request - incoming request.
***REMOVED*** @param next - command to transit modified http request to the next interceptor.
***REMOVED***/
public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

  if (request.method === 'POST') {
    return next.handle(request.clone({params: request.params.set('key', this.auth.API_KEY)}));
  } else {
    return next.handle(request.clone({params: request.params.set('auth', this.auth.getToken())}));
  }
}
}

import { AuthenticationService } from '@/app/core/services/authentication/authentication.service';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, concatMap } from 'rxjs/operators';

import { AppConfig } from '../app-config';
import { UserTokens } from '../services/models/user-tokens';

***REMOVED****
***REMOVED*** Interceptor transforming http requests to simplify all other requests to the Db.
***REMOVED***/
@Injectable({
  providedIn: 'root',
})
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private auth: AuthenticationService,
    private config: AppConfig,
  ) { }

***REMOVED***
  ***REMOVED*** HttpInterceptor realization.
  ***REMOVED*** @param request - incoming request.
  ***REMOVED*** @param next - command to transit modified http request to the next interceptor.
***REMOVED***
  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (request.method === 'POST') {
      return next.handle(request.clone({ params: request.params.set('key', this.config.API_KEY) }));
    }
    return next.handle(request);

  }
}

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

/**
 * Interceptor transforming http requests to simplify all other requests to the Db.
 */
@Injectable({
  providedIn: 'root',
})
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private auth: AuthenticationService,
    private config: AppConfig,
  ) { }

  /**
   * HttpInterceptor realization.
   * @param request - incoming request.
   * @param next - command to transit modified http request to the next interceptor.
   */
  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (request.method === 'POST') {
      return next.handle(request.clone({ params: request.params.set('key', this.config.API_KEY) }));
    }
    return next.handle(request);

  }
}

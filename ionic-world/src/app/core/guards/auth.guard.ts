import { AuthenticationService } from '@/app/core/services/authentication/authentication.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

/**
 * Guard for typical user.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  public constructor(
    private auth: AuthenticationService,
    private router: Router,
  ) {}

  /**
   * Implemented method for guarding some page access.
   */
  public canActivate(): Observable<boolean> {
    return this.auth.isAuthenticated().pipe(
      map(val => {
        if (val) {
            return true;
        }
        this.router.navigate(['']);
        alert('You need to sign-in firstly');
        return false;
      }),
      catchError ((err) => {
        throw err;
      }),
    );
  }
}

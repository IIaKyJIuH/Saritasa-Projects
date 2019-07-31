import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from '../services/auth/auth.service';

***REMOVED****
***REMOVED*** Guard for typical user.
***REMOVED***/
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  public constructor(
    private authService: AuthService,
    private router: Router,
  ) {}
***REMOVED***
 ***REMOVED*****REMOVED*** Implemented method
***REMOVED***
  public canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['/home']);
    alert('Firstly you need to login as user');
    return false;
  }
}

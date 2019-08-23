import { AuthenticationService } from '@/app/core/services/authentication/authentication.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

***REMOVED****
***REMOVED*** Guard for typical user.
***REMOVED***/
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  public constructor(
    private auth: AuthenticationService,
    private router: Router,
  ) {}

***REMOVED***
 ***REMOVED*****REMOVED*** Implemented method
***REMOVED***
  public canActivate(): boolean {
    if (this.auth.isAuthenticated()) {
      return true;
    }
    this.router.navigate(['']);
    alert('Firstly you need to login as firebase user');
    return false;
  }
}

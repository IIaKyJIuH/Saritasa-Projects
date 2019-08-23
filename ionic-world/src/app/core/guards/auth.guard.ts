import { AuthenticationService } from '@/app/core/services/authentication/authentication.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

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
   * Implemented method
   */
  public canActivate(): boolean {
    if (this.auth.isAuthenticated()) {
      return true;
    }
    this.router.navigate(['']);
    alert('Firstly you need to login as firebase user');
    return false;
  }
}

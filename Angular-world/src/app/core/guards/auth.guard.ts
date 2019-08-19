import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthenticationService } from '../services/authentication/auth.service';

/**
 * Guard for typical user.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  public constructor(
    private authService: AuthenticationService,
    private router: Router,
  ) {}

  /**
   * Implemented method
   */
  public canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['/home']);
    alert('Firstly you need to login as firebase user');
    return false;
  }
}

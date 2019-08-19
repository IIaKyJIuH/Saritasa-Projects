import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Admin guard service.
 */
@Injectable({
  providedIn: 'root',
})
export class AdminGuard {

  public constructor(
    private router: Router,
  ) {}

  /**
   * Guard function to choose allow access or not.
   */
  public canLoad(): boolean {
    if (localStorage.getItem('isAdmin') === 'true') {
      return true;
    }
    alert('click on the admin navbar button to toggle admin status');
    this.router.navigate(['/home']);
    return false;
  }

}

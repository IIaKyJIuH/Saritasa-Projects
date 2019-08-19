import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

***REMOVED****
***REMOVED*** Admin guard service.
***REMOVED***/
@Injectable({
  providedIn: 'root',
})
export class AdminGuard {

  public constructor(
    private router: Router,
  ) {}

***REMOVED***
 ***REMOVED*****REMOVED*** Guard function to choose allow access or not.
***REMOVED***
  public canLoad(): boolean {
    if (localStorage.getItem('isAdmin') === 'true') {
      return true;
    }
    alert('click on the admin navbar button to toggle admin status');
    this.router.navigate(['/home']);
    return false;
  }

}

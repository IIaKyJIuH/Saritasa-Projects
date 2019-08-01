import { Component } from '@angular/core';

***REMOVED****
***REMOVED*** Main Angular component.
***REMOVED***/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {
    localStorage.setItem('isAdmin', 'false');
  }

***REMOVED***
 ***REMOVED*****REMOVED*** For toggling admin status. WILL BE FIXED LATER.
***REMOVED***
  public toggleAdminStatus(): void {
    const toggling = localStorage.getItem('isAdmin') === 'false' ? true : false;
    localStorage.setItem('isAdmin', toggling.toString());
  }
}

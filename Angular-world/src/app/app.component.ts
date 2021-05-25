import { Component } from '@angular/core';

import { AuthenticationService } from './core/services/authentication/auth.service';

***REMOVED****
***REMOVED*** Main Angular component.
***REMOVED***/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public authService: AuthenticationService) {
    localStorage.setItem('isAdmin', 'false');
  }
}

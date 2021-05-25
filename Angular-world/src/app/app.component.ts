import { Component } from '@angular/core';

import { AuthenticationService } from './core/services/authentication/auth.service';

/**
 * Main Angular component.
 */
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

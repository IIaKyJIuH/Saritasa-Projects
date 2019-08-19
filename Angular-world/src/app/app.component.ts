import { Component } from '@angular/core';

/**
 * Main Angular component.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {
    localStorage.setItem('isAdmin', 'false');
  }

  /**
   * For toggling admin status. WILL BE FIXED LATER.
   */
  public toggleAdminStatus(): void {
    const toggling = localStorage.getItem('isAdmin') === 'false' ? true : false;
    localStorage.setItem('isAdmin', toggling.toString());
  }
}

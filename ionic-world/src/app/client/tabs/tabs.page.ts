import { AuthenticationService } from '@/app/core/services/authentication/authentication.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

/**
 * Contains all necessary pages for user.
 */
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {

  /**
   * .ctor
   * @param auth - for auth needs.
   * @param router - mostly for html here.
   */
  constructor(
    private auth: AuthenticationService,
    private router: Router,
  ) {}

  /**
   * Returns true if the current user is authenticated
   */
  public isAuthenticated(): Observable<boolean> {
    return this.auth.isAuthenticated();
  }

  /**
   * Signs user out from the firebase.
   */
  public signOut(): void {
    this.auth.signOut()
      .subscribe(() => this.router.navigate(['']));
  }

}

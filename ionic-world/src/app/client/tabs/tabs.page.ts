import { AuthenticationService } from '@/app/core/services/authentication/authentication.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

***REMOVED****
***REMOVED*** Contains all necessary pages for user.
***REMOVED***/
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {

***REMOVED***
  ***REMOVED*** .ctor
  ***REMOVED*** @param auth - for auth needs.
  ***REMOVED*** @param router - mostly for html here.
***REMOVED***
  constructor(
    private auth: AuthenticationService,
    private router: Router,
  ) {}

***REMOVED***
  ***REMOVED*** Returns true if the current user is authenticated
***REMOVED***
  public isAuthenticated(): Observable<boolean> {
    return this.auth.isAuthenticated();
  }

***REMOVED***
  ***REMOVED*** Signs user out from the firebase.
***REMOVED***
  public signOut(): void {
    this.auth.signOut()
      .subscribe(() => this.router.navigate(['']));
  }

}

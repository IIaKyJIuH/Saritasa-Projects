import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserCredential } from '@firebase/auth-types';
import { Observable, from, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { CredentialsModel } from '../models/credentials-model';

***REMOVED****
***REMOVED*** Service that authorizes user at FireBase.
***REMOVED***/
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

***REMOVED***
  ***REMOVED*** Field for remembering the auth state of user.
***REMOVED***
  public USER_UID = 'userUID';

***REMOVED***
  ***REMOVED*** .сtor
  ***REMOVED*** @param afAuth - angular fire authentication module.
***REMOVED***
  constructor(
    private afAuth: AngularFireAuth,
  ) { }

***REMOVED***
  ***REMOVED*** Signs in user with inputed email and password.
  ***REMOVED*** @param user - interface that includes user email and password.
  ***REMOVED*** @returns observable user object.
***REMOVED***
  public signIn(user: CredentialsModel): Observable<UserCredential> {
    return from(this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)).pipe(
      tap(userData => localStorage.setItem(this.USER_UID, userData.user.uid)),
    );
  }

***REMOVED***
  ***REMOVED*** Log outs user from firestore.
***REMOVED***
  public signOut(): Observable<void> {
    return from(this.afAuth.auth.signOut()).pipe(
      tap(() => localStorage.removeItem(this.USER_UID)),
    );
  }

***REMOVED***
  ***REMOVED*** Checks if the current user is logged in.
  ***REMOVED*** @returns if the currentUser !== null - true, else - false.
 ***REMOVED***/
  public isAuthenticated(): Observable<boolean> {
    return of(localStorage.getItem(this.USER_UID) !== null);
  }

}

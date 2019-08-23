import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserCredential } from '@firebase/auth-types';
import { Observable, from, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { CredentialsModel } from '../models/credentials-model';

/**
 * Service that authorizes user at FireBase.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  /**
   * Field for remembering the auth state of user.
   */
  public USER_UID = 'userUID';

  /**
   * .сtor
   * @param afAuth - angular fire authentication module.
   */
  constructor(
    private afAuth: AngularFireAuth,
  ) { }

  /**
   * Signs in user with inputed email and password.
   * @param user - interface that includes user email and password.
   * @returns observable user object.
   */
  public signIn(user: CredentialsModel): Observable<UserCredential> {
    return from(this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)).pipe(
      tap(userData => localStorage.setItem(this.USER_UID, userData.user.uid)),
    );
  }

  /**
   * Log outs user from firestore.
   */
  public signOut(): Observable<void> {
    return from(this.afAuth.auth.signOut()).pipe(
      tap(() => localStorage.removeItem(this.USER_UID)),
    );
  }

  /**
   * Checks if the current user is logged in.
   * @returns if the currentUser !== null - true, else - false.
  */
  public isAuthenticated(): Observable<boolean> {
    return of(localStorage.getItem(this.USER_UID) !== null);
  }

}

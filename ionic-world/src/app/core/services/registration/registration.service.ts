import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserCredential } from '@firebase/auth-types';
import { Observable, from } from 'rxjs';

import { CredentialsModel } from '../models/credentials-model';

/**
 * Registrates user in firebase.
 */
@Injectable({
  providedIn: 'root',
})
export class RegistrationService {

  constructor(
    private afAuth: AngularFireAuth,
  ) { }

  /**
   * Registrates user in firebase.
   * @param user - email + password.
   */
  public register(user: CredentialsModel): Observable<UserCredential> {
    return from(this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password));
  }

}

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserCredential } from '@firebase/auth-types';
import { Observable, from } from 'rxjs';

import { CredentialsModel } from '../models/credentials-model';

***REMOVED****
***REMOVED*** Registrates user in firebase.
***REMOVED***/
@Injectable({
  providedIn: 'root',
})
export class RegistrationService {

  constructor(
    private afAuth: AngularFireAuth,
  ) { }

***REMOVED***
  ***REMOVED*** Registrates user in firebase.
  ***REMOVED*** @param user - email + password.
***REMOVED***
  public register(user: CredentialsModel): Observable<UserCredential> {
    return from(this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password));
  }

}

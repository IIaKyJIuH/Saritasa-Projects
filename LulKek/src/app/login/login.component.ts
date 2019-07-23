import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of, pipe, concat, Subject } from 'rxjs';
import { switchMap, debounceTime, catchError, takeUntil, map } from 'rxjs/operators';

import { AuthService } from '../core/auth/auth.service';
import { UserModel } from '../core/auth/userModel';

***REMOVED****
***REMOVED*** All about behaviour of login actions.
***REMOVED***/
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {

***REMOVED***
 ***REMOVED*****REMOVED*** Form data: email + password.
***REMOVED***
  private loginForm: FormGroup;

***REMOVED***
 ***REMOVED*****REMOVED*** Subject for login purposes: unsubscribes user from login.
***REMOVED***
  private destroy$: Subject<void> = new Subject();

***REMOVED***
 ***REMOVED*****REMOVED*** .ctor
 ***REMOVED*****REMOVED***
 ***REMOVED*****REMOVED*** @param authService - my authorization service.
 ***REMOVED*****REMOVED*** @param router - responsible for redirecting user.
 ***REMOVED*****REMOVED*** @param formBuilder - includes form data.
***REMOVED***
  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    ) {
      this.loginForm  =  this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
      });
    }

***REMOVED***
 ***REMOVED*****REMOVED*** Async user login + redirect him then to ./profile page.
***REMOVED***
  public login(): void {
    this.authService.login(this.loginForm.value).pipe(
      map(response =>  new UserModel(response)),
      takeUntil(this.destroy$),
    ).subscribe(userJson => {
      localStorage.setItem(userJson.email, userJson.idToken);
      this.router.navigateByUrl('/profile');
***REMOVED*****REMOVED*****REMOVED***
    err => console.log);
  }

***REMOVED***
 ***REMOVED*****REMOVED*** Drops authorization and redirects user to the main page.
***REMOVED***
  public logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('');
  }

***REMOVED***
 ***REMOVED*****REMOVED*** @inheritdoc
***REMOVED***
  public ngOnInit(): void {
  }

***REMOVED***
 ***REMOVED*****REMOVED*** @inheritdoc
***REMOVED***
  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}

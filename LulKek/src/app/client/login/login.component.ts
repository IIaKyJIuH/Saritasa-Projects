import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../core/services/auth/auth.service';
import { UserLoginParam } from '../../core/services/auth/user-login-param';

***REMOVED****
***REMOVED*** All about behaviour of login actions.
***REMOVED***/
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

***REMOVED***
 ***REMOVED*****REMOVED*** Form data: email + password.
***REMOVED***
  public loginForm: FormGroup;

***REMOVED***
 ***REMOVED*****REMOVED*** .ctor
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
        email: ['heh@mda.ru', [ Validators.required, Validators.email ] ],
        password: ['lolkek', Validators.required],
      });
    }

***REMOVED***
 ***REMOVED*****REMOVED*** Async user login + if successful then redirect him to ./profile page.
***REMOVED***
  public onSubmit(formValues: UserLoginParam): void {
    this.authService.login(formValues).subscribe(
      () => this.router.navigateByUrl('/films'),
    );
  }

***REMOVED***
 ***REMOVED*****REMOVED*** Drops authorization and redirects user to the main page.
***REMOVED***
  public logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('');
  }

***REMOVED***
 ***REMOVED*****REMOVED*** All controls that have a name in html file.
 ***REMOVED*****REMOVED*** @returns FormGroup.controls.
***REMOVED***
  get formControls(): { [key: string]: AbstractControl; } { return this.loginForm.controls; }
}

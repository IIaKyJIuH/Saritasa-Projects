import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../core/services/auth/auth.service';

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
        email: ['heh@mda.ru', Validators.required],
        password: ['lolkek', Validators.required],
      });
    }

***REMOVED***
 ***REMOVED*****REMOVED*** Async user login + if successful then redirect him to ./profile page.
***REMOVED***
  public login(): void {
    this.authService.login(this.loginForm.value).subscribe(
      () => this.router.navigateByUrl('/profile'),
    );
  }

***REMOVED***
 ***REMOVED*****REMOVED*** Drops authorization and redirects user to the main page.
***REMOVED***
  public logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('');
  }
}

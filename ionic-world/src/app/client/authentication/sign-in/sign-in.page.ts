import { AuthenticationService } from '@/app/core/services/authentication/authentication.service';
import { CredentialsModel } from '@/app/core/services/models/credentials-model';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

***REMOVED****
***REMOVED*** Signing-in page for user to get access for other app abilities.
***REMOVED***/
@Component({
  selector: 'app-sign-in',
  templateUrl: 'sign-in.page.html',
  styleUrls: ['sign-in.page.scss'],
})
export class SignInPage {

***REMOVED***
  ***REMOVED*** Form data: email + password.
***REMOVED***
  public loginForm: FormGroup;

***REMOVED***
  ***REMOVED*** .ctor
  ***REMOVED*** @param auth - my authorization service.
  ***REMOVED*** @param router - responsible for redirecting user.
  ***REMOVED*** @param formBuilder - includes form data.
***REMOVED***
  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private formBuilder: FormBuilder,
    ) {
      this.loginForm  =  this.formBuilder.group({
        email: ['heh@mda.ru', [ Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ]) ] ],
        password: ['lolkek', Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(13),
        ])],
      });
    }

***REMOVED***
  ***REMOVED*** Async user login + if successful then redirect him to scanner page.
  ***REMOVED*** @param formValues - user email + password.
***REMOVED***
  public onSubmit(formValues: CredentialsModel): void {
    this.auth
      .signIn(formValues).pipe(take(1))
      .subscribe(() => this.router.navigate(['/tabs']));
  }

***REMOVED***
  ***REMOVED*** All controls that have a formControlName in html file.
  ***REMOVED*** @returns FormGroup.controls.
***REMOVED***
  get formControls(): { [key: string]: AbstractControl; } { return this.loginForm.controls; }

}

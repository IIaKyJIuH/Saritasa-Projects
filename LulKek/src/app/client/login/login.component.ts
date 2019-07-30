import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../core/services/auth/auth.service';
import { UserLoginParam } from '../../core/services/auth/user-login-param';

/**
 * All about behaviour of login actions.
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  /**
   * Form data: email + password.
   */
  public loginForm: FormGroup;

  /**
   * .ctor
   * @param authService - my authorization service.
   * @param router - responsible for redirecting user.
   * @param formBuilder - includes form data.
   */
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

  /**
   * Async user login + if successful then redirect him to ./profile page.
   */
  public onSubmit(formValues: UserLoginParam): void {
    this.authService.login(formValues).subscribe(
      () => this.router.navigateByUrl('/profile'),
    );
  }

  /**
   * Drops authorization and redirects user to the main page.
   */
  public logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('');
  }

  /**
   * All controls that have a name in html file.
   * @returns FormGroup.controls.
   */
  get formControls(): { [key: string]: AbstractControl; } { return this.loginForm.controls; }
}

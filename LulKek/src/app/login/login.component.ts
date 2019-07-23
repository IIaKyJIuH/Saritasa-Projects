import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../core/services/auth/auth.service';

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
        email: ['heh@mda.ru', Validators.required],
        password: ['lolkek', Validators.required],
      });
    }

  /**
   * Async user login + redirect him then to ./profile page.
   */
  public login(): void {
    this.authService.login(this.loginForm.value);
    this.router.navigateByUrl('/profile');
  }

  /**
   * Drops authorization and redirects user to the main page.
   */
  public logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('');
  }
}

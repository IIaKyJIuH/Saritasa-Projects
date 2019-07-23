import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of, pipe, concat, Subject } from 'rxjs';
import { switchMap, debounceTime, catchError, takeUntil, map } from 'rxjs/operators';

import { AuthService } from '../core/auth/auth.service';
import { UserModel } from '../core/auth/userModel';

/**
 * All about behaviour of login actions.
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {

  /**
   * Form data: email + password.
   */
  private loginForm: FormGroup;

  /**
   * Subject for login purposes: unsubscribes user from login.
   */
  private destroy$: Subject<void> = new Subject();

  /**
   * .ctor
   *
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
        email: ['', Validators.required],
        password: ['', Validators.required],
      });
    }

  /**
   * Async user login + redirect him then to ./profile page.
   */
  public login(): void {
    this.authService.login(this.loginForm.value).pipe(
      map(response =>  new UserModel(response)),
      takeUntil(this.destroy$),
    ).subscribe(userJson => {
      localStorage.setItem(userJson.email, userJson.idToken);
      this.router.navigateByUrl('/profile');
    },
    err => console.log);
  }

  /**
   * Drops authorization and redirects user to the main page.
   */
  public logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('');
  }

  /**
   * @inheritdoc
   */
  public ngOnInit(): void {
  }

  /**
   * @inheritdoc
   */
  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}

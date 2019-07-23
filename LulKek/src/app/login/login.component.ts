import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of, pipe, concat } from 'rxjs';
import { switchMap, debounceTime, catchError } from 'rxjs/operators';

import { AuthService } from '../core/auth/auth.service';

/**
 * All about behaviour of login actions.
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  /**
   * Form data: email + password.
   */
  private loginForm: FormGroup;

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
    concat(
      of(this.authService.login(this.loginForm.value)
        .subscribe(userJson => localStorage.setItem(userJson.email, userJson.idToken))),
      this.router.navigateByUrl('/profile'),
    );
    /* TODO: спросить у Данила, нужно ли как-то значение loginForm сохранять для каждого пользователя,
    или Angular для каждого пользователя создаёт этот класс и всё норм*/
  }

  /**
   * Drops authorization and redirects to the main page.
   */
  public logout(): void {
    concat(
      of(localStorage.setItem(this.loginForm.value.email, null)),
      this.router.navigateByUrl(''),
    );
  }
  /**
   * @inheritdoc
   */
  public ngOnInit(): void {
  }

}

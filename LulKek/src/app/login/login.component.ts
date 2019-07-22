import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of, pipe, concat } from 'rxjs';
import { switchMap, debounceTime, catchError } from 'rxjs/operators';


import { AuthService } from '../core/auth/auth.service';

/**
 * Компонент, отвечающий за логику входа на сервер.
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  /**
   * Данные из формы, email + password.
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
   * Метод, асинхронно выполняющий login пользователя
   * и перенаправляющий его после авторизации в ./profile.
   */
  public login(): void {
    concat(
      of(this.authService.login(this.loginForm.value)
        .subscribe(userJson => localStorage.setItem(userJson.email, userJson.idToken))),
      this.router.navigateByUrl('/profile'),
    );
  }
  /**
   * @inheritdoc
   */
  public ngOnInit(): void {
  }

}

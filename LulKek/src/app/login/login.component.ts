import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of, pipe, concat } from 'rxjs';
import { switchMap, debounceTime, catchError } from 'rxjs/operators';


import { AuthService } from '../core/auth/auth.service';

***REMOVED****
***REMOVED*** Компонент, отвечающий за логику входа на сервер.
***REMOVED***/
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

***REMOVED***
 ***REMOVED*****REMOVED*** Данные из формы, email + password.
***REMOVED***
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

***REMOVED***
 ***REMOVED*****REMOVED*** Метод, асинхронно выполняющий login пользователя
 ***REMOVED*****REMOVED*** и перенаправляющий его после авторизации в ./profile.
***REMOVED***
  public login(): void {
    concat(
      of(this.authService.login(this.loginForm.value)
        .subscribe(userJson => localStorage.setItem(userJson.email, userJson.idToken))),
      this.router.navigateByUrl('/profile'),
    );
  }
***REMOVED***
 ***REMOVED*****REMOVED*** @inheritdoc
***REMOVED***
  public ngOnInit(): void {
  }

}

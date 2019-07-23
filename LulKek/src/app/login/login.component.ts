import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of, pipe, concat } from 'rxjs';
import { switchMap, debounceTime, catchError } from 'rxjs/operators';

import { AuthService } from '../core/auth/auth.service';

***REMOVED****
***REMOVED*** All about behaviour of login actions.
***REMOVED***/
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

***REMOVED***
 ***REMOVED*****REMOVED*** Form data: email + password.
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
 ***REMOVED*****REMOVED*** Async user login + redirect him then to ./profile page.
***REMOVED***
  public login(): void {
    concat(
      of(this.authService.login(this.loginForm.value)
        .subscribe(userJson => localStorage.setItem(userJson.email, userJson.idToken))),
      this.router.navigateByUrl('/profile'),
    );
  ***REMOVED*****REMOVED*****REMOVED*** TODO: спросить у Данила, нужно ли как-то значение loginForm сохранять для каждого пользователя,
    или Angular для каждого пользователя создаёт этот класс и всё норм*/
  }

***REMOVED***
 ***REMOVED*****REMOVED*** Drops authorization and redirects to the main page.
***REMOVED***
  public logout(): void {
    concat(
      of(localStorage.setItem(this.loginForm.value.email, null)),
      this.router.navigateByUrl(''),
    );
  }
***REMOVED***
 ***REMOVED*****REMOVED*** @inheritdoc
***REMOVED***
  public ngOnInit(): void {
  }

}

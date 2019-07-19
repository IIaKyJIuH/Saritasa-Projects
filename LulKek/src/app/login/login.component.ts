import { AuthService } from '../core/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

***REMOVED****
***REMOVED*** Компонент, отвечающий за логику входа на сервер.
***REMOVED***/
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

***REMOVED***
 ***REMOVED*****REMOVED*** Залогинен ли пользователь, boolean.
***REMOVED***
  private isSubmitted = false;

***REMOVED***
 ***REMOVED*****REMOVED*** Данные из формы, email + password.
***REMOVED***
  private loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    ) { }

***REMOVED***
 ***REMOVED*****REMOVED*** Метод, выполняющий login пользователя.
***REMOVED***
  public login(): void {
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.authService.login(this.loginForm.value)
    .subscribe( userJson => localStorage.setItem(userJson.email, userJson.idToken));
    this.router.navigateByUrl('/profile');
  }

  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

}

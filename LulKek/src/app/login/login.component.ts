import { AuthService } from '../core/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

/**
 * Компонент, отвечающий за логику входа на сервер.
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /**
   * Залогинен ли пользователь, boolean.
   */
  private isSubmitted = false;

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
        email: ['', Validators.required],
        password: ['', Validators.required]
    });
    }

  /**
   * Метод, выполняющий login пользователя.
   */
  public login(): void {
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.authService.login(this.loginForm.value)
    .subscribe( userJson => localStorage.setItem(userJson.email, userJson.idToken));
    this.router.navigateByUrl('/profile');
    // TODO: сделать асинхронным вызов метода сервиса и переадресацию
  }
  /**
   * @inheritdoc
   */
  ngOnInit(): void {
  }

}

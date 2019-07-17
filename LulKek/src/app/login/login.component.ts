import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userInfo } from 'os';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }
  isSubmitted = false;
  loginForm: FormGroup;

  login() {
    console.log( this.loginForm.value);
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.authService.login(this.loginForm.value);
    // alert('You logged in');
    // this.router.navigateByUrl('/profile');
  }

  get formControls() { return this.loginForm.controls; }

  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
      email: ['heh@mda.ru', Validators.required],
      password: ['lolkek', Validators.required]
  });
  }

}
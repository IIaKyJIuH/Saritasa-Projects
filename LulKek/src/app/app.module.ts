import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule, Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './core/auth/auth.service';
import { TokenInterceptor } from './core/auth/token.interceptor';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', component: NotFoundComponent },
];

***REMOVED****
***REMOVED*** @inheritdoc
***REMOVED***/
@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      NotFoundComponent,
      HomeComponent,
      ProfileComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      RouterModule.forRoot(appRoutes),
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
   ],
   providers: [
      AuthService,
      {
         provide: HTTP_INTERCEPTORS,
         useClass: TokenInterceptor,
         multi: true,
  ***REMOVED*****REMOVED*****REMOVED***
   ],
   bootstrap: [
      AppComponent,
   ],
})
export class AppModule { }

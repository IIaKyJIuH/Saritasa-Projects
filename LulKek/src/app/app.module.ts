import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenInterceptor } from './core/interceptor/token.interceptor';
import { AuthService } from './core/services/auth/auth.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';

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

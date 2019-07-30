import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { OrderModule } from 'ngx-order-pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailedCharacterInfoComponent } from './client/detailed-character-info/detailed-character-info.component';
import { DetailedFilmInfoComponent } from './client/detailed-film-info/detailed-film-info.component';
import { FilmsComponent } from './client/films/films.component';
import { HomeComponent } from './client/home/home.component';
import { LoginComponent } from './client/login/login.component';
import { NotFoundComponent } from './client/not-found/not-found.component';
import { TokenInterceptor } from './core/interceptor/token.interceptor';
import { AuthService } from './core/services/auth/auth.service';

/**
 * @inheritdoc
 */
@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      NotFoundComponent,
      HomeComponent,
      FilmsComponent,
      DetailedFilmInfoComponent,
      DetailedCharacterInfoComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      OrderModule,
   ],
   providers: [
      AuthService,
      {
         provide: HTTP_INTERCEPTORS,
         useClass: TokenInterceptor,
         multi: true,
      },
   ],
   bootstrap: [
      AppComponent,
   ],
})
export class AppModule { }

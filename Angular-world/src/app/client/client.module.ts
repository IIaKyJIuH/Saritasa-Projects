import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { DetailedCharacterInfoComponent } from './detailed-character-info/detailed-character-info.component';
import { DetailedFilmInfoComponent } from './detailed-film-info/detailed-film-info.component';
import { FilmsComponent } from './films/films.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { WrongPathComponent } from './wrong-path/wrong-path.component';

***REMOVED****
***REMOVED*** @inheritdoc
***REMOVED***/
@NgModule({
  declarations: [
    DetailedCharacterInfoComponent,
    DetailedFilmInfoComponent,
    FilmsComponent,
    HomeComponent,
    LoginComponent,
    WrongPathComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
})
export class ClientModule { }

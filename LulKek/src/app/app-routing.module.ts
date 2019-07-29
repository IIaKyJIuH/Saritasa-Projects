import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailedCharacterInfoComponent } from './detailed-character-info/detailed-character-info.component';
import { DetailedFilmInfoComponent } from './detailed-film-info/detailed-film-info.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'detailed-film-info', component: DetailedFilmInfoComponent },
  { path: 'detailed-character-info', component: DetailedCharacterInfoComponent },
  { path: '**', component: NotFoundComponent },
];

***REMOVED****
***REMOVED*** @inheritdoc
***REMOVED***/
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

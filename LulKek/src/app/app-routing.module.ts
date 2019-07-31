import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailedCharacterInfoComponent } from './client/detailed-character-info/detailed-character-info.component';
import { DetailedFilmInfoComponent } from './client/detailed-film-info/detailed-film-info.component';
import { FilmsComponent } from './client/films/films.component';
import { HomeComponent } from './client/home/home.component';
import { LoginComponent } from './client/login/login.component';
import { WrongPathComponent } from './client/wrong-path/wrong-path.component';
import { AdminGuard } from './core/guards/admin.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: FilmsComponent },
  { path: 'detailed-film-info/:id', component: DetailedFilmInfoComponent },
  { path: 'detailed-character-info/:id', component: DetailedCharacterInfoComponent },
  {
    path: 'admin',
    canLoad: [AdminGuard],
    loadChildren: () =>
      import('./admin/admin.module').then(mod => mod.AdminModule),
***REMOVED***
  { path: '**', component: WrongPathComponent },
];

***REMOVED****
***REMOVED*** @inheritdoc
***REMOVED***/
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

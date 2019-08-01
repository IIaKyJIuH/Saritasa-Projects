import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailedCharacterInfoComponent } from './client/detailed-character-info/detailed-character-info.component';
import { DetailedFilmInfoComponent } from './client/detailed-film-info/detailed-film-info.component';
import { FilmsComponent } from './client/films/films.component';
import { HomeComponent } from './client/home/home.component';
import { LoginComponent } from './client/login/login.component';
import { WrongPathComponent } from './client/wrong-path/wrong-path.component';
import { AdminGuard } from './core/guards/admin.guard';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
     redirectTo: 'home',
     pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'films',
    component: FilmsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'films/:id',
    component: DetailedFilmInfoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'characters/:id',
    component: DetailedCharacterInfoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    canLoad: [AdminGuard],
    loadChildren: () =>
      import('./admin/admin.module').then(mod => mod.AdminModule),
  },
  { path: '**', component: WrongPathComponent },
];

/**
 * @inheritdoc
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

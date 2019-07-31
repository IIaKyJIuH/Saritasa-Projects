import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmEditComponent } from './film-edit/film-edit.component';
import { FilmsComponent } from './films/films.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'films',
  },
  {
    path: 'films',
    component: FilmsComponent,
  },
  {
    path: 'films/:id',
    component: FilmEditComponent,
  },
];

/**
 * Routings for admin module.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }

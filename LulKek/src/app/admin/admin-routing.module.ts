import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmEditComponent } from './film-edit/film-edit.component';
import { FilmsComponent } from './films/films.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'films',
***REMOVED***
  {
    path: 'films',
    component: FilmsComponent,
***REMOVED***
  {
    path: 'films/:id',
    component: FilmEditComponent,
***REMOVED***
];

***REMOVED****
***REMOVED*** Routings for admin module.
***REMOVED***/
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }

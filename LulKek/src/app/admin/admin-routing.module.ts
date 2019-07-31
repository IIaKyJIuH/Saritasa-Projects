import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../core/guards/auth.guard';

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
    canActivate: [AuthGuard],
***REMOVED***
  {
    path: 'films/:id',
    component: FilmEditComponent,
    canActivate: [AuthGuard],
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

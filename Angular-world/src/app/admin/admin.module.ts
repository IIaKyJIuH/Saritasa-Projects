import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FilmEditComponent } from './film-edit/film-edit.component';
import { FilmsComponent } from './films/films.component';

***REMOVED****
***REMOVED*** Admin main module.
***REMOVED***/
@NgModule({
  declarations: [FilmsComponent, FilmEditComponent, AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
  ],
})
export class AdminModule {}

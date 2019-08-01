import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
} from '@angular/material';
import {MatDividerModule} from '@angular/material/divider';
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
export class AdminModule { }

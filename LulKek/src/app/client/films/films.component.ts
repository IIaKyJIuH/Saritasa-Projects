import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmsService } from 'src/app/core/services/data/films/films.service';

import { FilmModel } from '../../core/services/models/film-model';

/**
 * Profile of authorized person with table from Db data.
 */
@Component({
  selector: 'app-profile',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
})
export class FilmsComponent {

  /**
   * Array of films from Db.
   */
  public films$: Observable<FilmModel[]>;

  /**
   * Headers for component`s html table.
   */
  public tableHeaders: string[] = ['Title', 'Year', 'Director'];

  /**
   * .ctor
   * @param filmsService - service managing films data from Db.
   */
  constructor(
    private filmsService: FilmsService,
  ) {
    this.films$ = this.filmsService.getDbFilmsData();
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
   * @param authService - authorization service.
   */
  constructor(
    private filmsService: FilmsService,
    private router: Router,
    ) {
    this.films$ = this.filmsService.getDbFilmsData();
   }

  /**
   * Redirects user to a detailed info about chosen film.
   * @param selectedFilmIndex - film selected from the table line.
   */
  public onClick(selectedFilmIndex: number): void {
    this.router.navigateByUrl(`/detailed-film-info/${selectedFilmIndex}`);
  }

}

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmsService } from 'src/app/core/services/data/films/films.service';
import { FilmModel } from 'src/app/core/services/models/film-model';

/**
 * Admin`s films page.
 */
@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
})
export class FilmsComponent {

  /**
   * List of films from films service.
   */
  public films$: Observable<FilmModel[]>;

  constructor(
    private filmsService: FilmsService,
  ) {
    this.films$ = this.filmsService.getDbFilmsData();
  }

}

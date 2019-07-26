import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from '../core/services/data/data.service';
import { FilmModel } from '../core/services/data/film-model';

/**
 * About all film details.
 */
@Component({
  selector: 'app-detailed-film-info',
  templateUrl: './detailed-film-info.component.html',
  styleUrls: ['./detailed-film-info.component.css'],
})
export class DetailedFilmInfoComponent {

  /**
   * Film that is interesting to user.
   */
  public film$: Observable<FilmModel>;

  /**
   * .ctor
   * @param dataService - works with all the data from FireBase database.
   */
  constructor(
    private dataService: DataService,
  ) {
    this.film$ = this.dataService.transportedFilm$;
  }

}

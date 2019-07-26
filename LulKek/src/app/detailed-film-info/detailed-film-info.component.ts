import { Component } from '@angular/core';

import { DataService } from '../core/services/data/data.service';
import { FilmModel } from '../core/services/data/film-model';

***REMOVED****
***REMOVED*** About all film details.
***REMOVED***/
@Component({
  selector: 'app-detailed-film-info',
  templateUrl: './detailed-film-info.component.html',
  styleUrls: ['./detailed-film-info.component.css'],
})
export class DetailedFilmInfoComponent {

  public film: FilmModel;

  constructor(
    private dataService: DataService,
  ) {
    this.dataService.transportedFilm$.subscribe(film => this.film = film);
  }

  public displayFilm() {
    console.log(this.film);
  }

}

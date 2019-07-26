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

***REMOVED***
 ***REMOVED*****REMOVED*** Film that is interesting to user.
***REMOVED***
  public film: FilmModel;

***REMOVED***
 ***REMOVED*****REMOVED*** .ctor
 ***REMOVED*****REMOVED*** @param dataService - works with all the data from FireBase database.
***REMOVED***
  constructor(
    private dataService: DataService,
  ) {
    this.dataService.transportedFilm$.subscribe(film => this.film = film);
  }

}

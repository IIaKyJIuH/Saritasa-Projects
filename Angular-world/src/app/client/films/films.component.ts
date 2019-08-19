import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmsService } from 'src/app/core/services/data/films/films.service';

import { FilmModel } from '../../core/services/models/film-model';

***REMOVED****
***REMOVED*** Profile of authorized person with table from Db data.
***REMOVED***/
@Component({
  selector: 'app-profile',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
})
export class FilmsComponent {

***REMOVED***
 ***REMOVED*****REMOVED*** Array of films from Db.
***REMOVED***
  public films$: Observable<FilmModel[]>;

***REMOVED***
 ***REMOVED*****REMOVED*** Headers for component`s html table.
***REMOVED***
  public tableHeaders: string[] = ['Title', 'Year', 'Director'];

***REMOVED***
 ***REMOVED*****REMOVED*** .ctor
 ***REMOVED*****REMOVED*** @param filmsService - service managing films data from Db.
***REMOVED***
  constructor(
    private filmsService: FilmsService,
  ) {
    this.films$ = this.filmsService.getDbFilmsData();
  }

}

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmsService } from 'src/app/core/services/data/films/films.service';
import { FilmModel } from 'src/app/core/services/models/film-model';

***REMOVED****
***REMOVED*** Admin`s films page.
***REMOVED***/
@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
})
export class FilmsComponent {

***REMOVED***
 ***REMOVED*****REMOVED*** List of films from films service.
***REMOVED***
  public films$: Observable<FilmModel[]>;

  constructor(
    private filmsService: FilmsService,
  ) {
    this.films$ = this.filmsService.getDbFilmsData();
  }

}

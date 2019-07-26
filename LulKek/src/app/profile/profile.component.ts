import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderModule } from 'ngx-order-pipe';

import { DataService } from '../core/services/data/data.service';
import { FilmModel } from '../core/services/data/film-model';

***REMOVED****
***REMOVED*** Profile of authorized person with table from DB data.
***REMOVED***/
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {

***REMOVED***
 ***REMOVED*****REMOVED*** Array of films from DB.
***REMOVED***
  private films: Array<FilmModel>;

***REMOVED***
 ***REMOVED*****REMOVED*** .ctor
 ***REMOVED*****REMOVED*** @param authService - authorization service
***REMOVED***
  constructor(
    private dataService: DataService,
    private router: Router,
    ) {
    this.initializeFilms();
   }

***REMOVED***
 ***REMOVED*****REMOVED*** Initializes films.
***REMOVED***
  private initializeFilms(): void {
    this.dataService.getDBFilmsData().subscribe(
      () => this.films = JSON.parse(localStorage.getItem('films')),
    );
  }

***REMOVED***
 ***REMOVED*****REMOVED*** Redirects user to a detailed info about chosen film.
 ***REMOVED*****REMOVED*** @param event - event emmited by clicking on the table line.
***REMOVED***
  public onClick(event: FilmModel): void {
    this.dataService.transportSelectedFilm(event);
    this.router.navigateByUrl('/detailed-film-info');
  }

}

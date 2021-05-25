import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminFilmsService } from 'src/app/core/services/data/films/admin-films.service';
import { FilmsService } from 'src/app/core/services/data/films/films.service';
import { FilmModel } from 'src/app/core/services/models/film-model';

***REMOVED****
***REMOVED*** Here admin can edit films information.
***REMOVED***/
@Component({
  selector: 'app-film-edit',
  templateUrl: './film-edit.component.html',
  styleUrls: ['./film-edit.component.css'],
})
export class FilmEditComponent {
***REMOVED***
  ***REMOVED*** Film observable to be edited.
***REMOVED***
  public film$: Observable<FilmModel>;

***REMOVED***
  ***REMOVED*** Film index from the Db.
***REMOVED***
  public filmId: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private adminFilmsService: AdminFilmsService,
    private router: Router,
    private filmsService: FilmsService,
  ) {
    this.filmId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'), 10);
    this.film$ = this.filmsService.getDbFilmData(this.filmId);
  }

***REMOVED***
  ***REMOVED*** Update film's data method.
  ***REMOVED*** @param film Film data object.
***REMOVED***
  public update(film: FilmModel): void {
    this.adminFilmsService
      .updateFilm(this.filmId, film)
      .subscribe(() => this.router.navigate(['./']));
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, concat, of } from 'rxjs';
import { AdminFilmsService } from 'src/app/core/services/data/films/admin-films.service';
import { FilmsService } from 'src/app/core/services/data/films/films.service';
import { FilmModel } from 'src/app/core/services/models/film-model';

/**
 * Here admin can edit films information.
 */
@Component({
  selector: 'app-film-edit',
  templateUrl: './film-edit.component.html',
  styleUrls: ['./film-edit.component.css'],
})
export class FilmEditComponent {

  /**
   * Film observable to be edited.
   */
  public film$: Observable<FilmModel>;

  /**
   * Film index from the Db.
   */
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

  /**
   * Update film's data method.
   * @param film Film data object.
   */
  public update(film: FilmModel): void {
    this.adminFilmsService
      .updateFilm(this.filmId, film)
      .subscribe(() =>
        this.router.navigate(['../']),
      );
  }

}

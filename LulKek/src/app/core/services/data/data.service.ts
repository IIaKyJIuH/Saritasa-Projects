import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { take, map, tap } from 'rxjs/operators';

import { DbDataDto } from './dbData-dto';
import { FilmModel } from './film-model';

/**
 * Works with DB data.
 */
@Injectable({
  providedIn: 'root',
})
export class DataService {

  private filmSource: BehaviorSubject<FilmModel> = new BehaviorSubject(new FilmModel({}));
  public transportedFilm$: Observable<FilmModel> = this.filmSource.asObservable();

  constructor(
    private http: HttpClient,
  ) { }

  /**
   * Getting films info from DB.
   * @returns array of films.
   */
  public getDBFilmsData(): Observable<FilmModel[]> {
    return this.http.get<DbDataDto>(`https://proj-0-8c535.firebaseio.com/swapi.json`).pipe(
      map(response =>  {
        const films: Array<FilmModel> = new Array();
        response.films.forEach(filmProps => films.push(new FilmModel(filmProps.fields)));
        return films;
      }),
      tap(filmsModel => localStorage.setItem('films', JSON.stringify(filmsModel))),
      take(1),
    );
  }

  public transportSelectedFilm(film: FilmModel): void {
    this.filmSource.next(film);
  }

}

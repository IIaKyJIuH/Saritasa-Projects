import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { take, map, tap } from 'rxjs/operators';

import { DbDataDto } from './dbData-dto';
import { FilmModel } from './film-model';

***REMOVED****
***REMOVED*** Works with DB data.
***REMOVED***/
@Injectable({
  providedIn: 'root',
})
export class DataService {

***REMOVED***
 ***REMOVED*****REMOVED*** Needed for transporting between two non-connected components.
***REMOVED***
  private filmSource: BehaviorSubject<FilmModel> = new BehaviorSubject(new FilmModel({}));

***REMOVED***
 ***REMOVED*****REMOVED*** Global observable of film to be used in others components.
***REMOVED***
  public transportedFilm$: Observable<FilmModel> = this.filmSource.asObservable();

***REMOVED***
 ***REMOVED*****REMOVED*** .ctor
 ***REMOVED*****REMOVED*** @param http - http client.
***REMOVED***
  constructor(
    private http: HttpClient,
  ) { }

***REMOVED***
 ***REMOVED*****REMOVED*** Getting films info from DB.
 ***REMOVED*****REMOVED*** @returns array of films.
***REMOVED***
  public getDBFilmsData(): Observable<FilmModel[]> {
    return this.http.get<DbDataDto>(`https://proj-0-8c535.firebaseio.com/swapi.json`).pipe(
      map(response =>  {
        const films: Array<FilmModel> = new Array();
        response.films.map(filmProps => films.push(new FilmModel(filmProps.fields)));
        return films;
      }),
      tap(filmsModel => localStorage.setItem('films', JSON.stringify(filmsModel))),
      take(1),
    );
  }

***REMOVED***
 ***REMOVED*****REMOVED*** Makes selected film accessible from from other components.
 ***REMOVED*****REMOVED*** @param film - chosen film from /profile component.
***REMOVED***
  public transportSelectedFilm(film: FilmModel): void {
    this.filmSource.next(film);
  }

}

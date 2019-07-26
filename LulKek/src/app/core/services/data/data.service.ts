import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { take, map, tap } from 'rxjs/operators';

import { DbDataDto } from './dbData-dto';
import { FilmDTO } from './film-dto';
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
      map(response => response.films.map(filmProps => this.createFilmModelByDTO(filmProps.fields))),
      take(1),
    );
  }

  private createFilmModelByDTO(filmDTO: FilmDTO): FilmModel {
    return new FilmModel({
      characters: filmDTO.characters,
      director: filmDTO.director,
      episodeId: filmDTO.episode_id,
      planets: filmDTO.planets,
      releaseDate: new Date(filmDTO.release_date).getFullYear(),
      species: filmDTO.species,
      starships: filmDTO.starships,
      title: filmDTO.title,
      vehicles: filmDTO.vehicles,
    });
  }

***REMOVED***
 ***REMOVED*****REMOVED*** Makes selected film accessible from from other components.
 ***REMOVED*****REMOVED*** @param film - chosen film from /profile component.
***REMOVED***
  public transportSelectedFilm(film: FilmModel): void {
    this.filmSource.next(film);
  }

}

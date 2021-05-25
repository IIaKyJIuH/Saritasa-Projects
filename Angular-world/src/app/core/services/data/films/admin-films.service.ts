import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig } from 'src/app/core/app-config';

import { FilmDto } from '../../dtos/film-dto';
import { FilmModel } from '../../models/film-model';

***REMOVED****
***REMOVED*** Lets admin to patch the data to the server.
***REMOVED***/
@Injectable({
  providedIn: 'root',
})
export class AdminFilmsService {
  constructor(private http: HttpClient, private config: AppConfig) {}

***REMOVED***
 ***REMOVED*****REMOVED*** Make API call for update film's data.
 ***REMOVED*****REMOVED*** @param id - Film's index according to the Db swapi file.
 ***REMOVED*****REMOVED*** @param filmData - Film's data to be uploaded.
***REMOVED***
  public updateFilm(id: number, filmData: FilmModel): Observable<void> {
    return this.http.patch<void>(
      `${this.config.FIREBASE_SWAPI_URL}/films/${id}/fields.json`,
      this.mapFilmToFilmDto(filmData),
    );
  }

  private mapFilmToFilmDto(film: FilmModel): FilmDto {
    return {
      title: film.title,
      characters: film.characters,
      planets: film.planets,
      species: film.species,
      starships: film.starships,
      vehicles: film.vehicles,
      episode_id: film.episodeId,
      release_date: film.releaseDate,
      director: film.director,
  ***REMOVED*****REMOVED*****REMOVED***
  }
}

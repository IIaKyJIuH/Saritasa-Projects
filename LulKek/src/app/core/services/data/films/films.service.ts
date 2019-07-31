import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AppConfig } from 'src/app/core/app-config';

import { FilmDto } from '../../Dtos/film-dto';
import { PropertiesDto } from '../../Dtos/properties-dto';
import { FilmModel } from '../../models/film-model';

***REMOVED****
***REMOVED*** Works with the Db 'films' info.
***REMOVED***/
@Injectable({
  providedIn: 'root',
})
export class FilmsService {

  constructor(
    private http: HttpClient,
    private config: AppConfig,
  ) { }

***REMOVED***
 ***REMOVED*****REMOVED*** Getting films info from Db.
 ***REMOVED*****REMOVED*** @returns observable array of films.
***REMOVED***
  public getDbFilmsData(): Observable<FilmModel[]> {
    return this.http.get<PropertiesDto<FilmDto>[]>(`${this.config.FIREBASE_SWAPI_URL}/films.json`).pipe(
      map(response => response.map(filmProps => this.createFilmModelByDto(filmProps.fields, filmProps.pk - 1))),
      take(1),
    );
  }

***REMOVED***
 ***REMOVED*****REMOVED*** Getting preferred film from the Db.
 ***REMOVED*****REMOVED*** @param filmDbIndex - film index according to the swapi file.
 ***REMOVED*****REMOVED*** @returns observable film.
***REMOVED***
  public getDbFilmData(filmDbIndex: number): Observable<FilmModel> {
    return this.http.get<PropertiesDto<FilmDto>>(`${this.config.FIREBASE_SWAPI_URL}/films/${filmDbIndex}.json`).pipe(
      map(filmProps => this.createFilmModelByDto(filmProps.fields, filmProps.pk - 1)),
      take(1),
    );
   }

***REMOVED***
 ***REMOVED*****REMOVED*** Translates Dto data about film to the film model.
 ***REMOVED*****REMOVED*** @param filmDto - film Dto that includes info about properties name from Db.
 ***REMOVED*****REMOVED*** @returns film model.
***REMOVED***
  private createFilmModelByDto(filmDto: FilmDto, index: number): FilmModel {
    return new FilmModel({
      databaseId: index,
      characters: filmDto.characters,
      director: filmDto.director,
      episodeId: filmDto.episode_id,
      planets: filmDto.planets,
      releaseDate: new Date(filmDto.release_date),
      species: filmDto.species,
      starships: filmDto.starships,
      title: filmDto.title,
      vehicles: filmDto.vehicles,
    });
  }
}
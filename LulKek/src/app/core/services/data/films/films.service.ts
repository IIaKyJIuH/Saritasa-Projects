import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AppConfig } from 'src/app/core/app-config';

import { FilmDto } from '../../dtos/film-dto';
import { PropertiesDto } from '../../dtos/properties-dto';
import { FilmModel } from '../../models/film-model';

/**
 * Works with the Db 'films' info.
 */
@Injectable({
  providedIn: 'root',
})
export class FilmsService {

  constructor(
    private http: HttpClient,
    private config: AppConfig,
  ) { }

  /**
   * Getting films info from Db.
   * @returns observable array of films.
   */
  public getDbFilmsData(): Observable<FilmModel[]> {
    return this.http.get<PropertiesDto<FilmDto>[]>(`${this.config.FIREBASE_SWAPI_URL}/films.json`).pipe(
      map(response => response.map((filmProps, index) => this.createFilmModelByDto(filmProps.fields, index))),
      take(1),
    );
  }

  /**
   * Getting preferred film from the Db.
   * @param filmDbIndex - film index according to the swapi file.
   * @returns observable film.
   */
  public getDbFilmData(filmDbIndex: number): Observable<FilmModel> {
    return this.http.get<PropertiesDto<FilmDto>>(`${this.config.FIREBASE_SWAPI_URL}/films/${filmDbIndex}.json`).pipe(
      map((filmProps, index) => this.createFilmModelByDto(filmProps.fields, index)),
      take(1),
    );
   }

  /**
   * Translates Dto data about film to the film model.
   * @param filmDto - film Dto that includes info about properties name from Db.
   * @returns film model.
   */
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

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { take, map, tap } from 'rxjs/operators';

import { DbDataDto } from './dbData-dto';
import { FilmDTO } from './film-dto';
import { FilmModel } from './film-model';

/**
 * Works with DB data.
 */
@Injectable({
  providedIn: 'root',
})
export class DataService {

  /**
   * Needed for transporting between two non-connected components.
   */
  private filmSource: BehaviorSubject<FilmModel> = new BehaviorSubject(new FilmModel({}));

  /**
   * Global observable of film to be used in others components.
   */
  public transportedFilm$: Observable<FilmModel> = this.filmSource.asObservable();

  /**
   * .ctor
   * @param http - http client.
   */
  constructor(
    private http: HttpClient,
  ) { }

  /**
   * Getting films info from DB.
   * @returns array of films.
   */
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

  /**
   * Makes selected film accessible from from other components.
   * @param film - chosen film from /profile component.
   */
  public transportSelectedFilm(film: FilmModel): void {
    this.filmSource.next(film);
  }

}

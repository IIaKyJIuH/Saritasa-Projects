import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { take, map, tap } from 'rxjs/operators';

import { CharacterDTO } from '../DTOs/character-dto';
import { DbDataDto } from '../DTOs/dbData-dto';
import { FilmDTO } from '../DTOs/film-dto';
import { CharacterModel } from '../models/character-model';
import { FilmModel } from '../models/film-model';

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
   * Global observable of the film to be used in others components.
   */
  public transportedFilm$: Observable<FilmModel> = this.filmSource.asObservable();

  /**
   * Needed for transporting between two non-connected components.
   */
  private characterSource: BehaviorSubject<CharacterModel> = new BehaviorSubject(new CharacterModel({}));

  /**
   * Global observable of the characters from the film accessible for other components.
   */
  public transportedCharacter$: Observable<CharacterModel> = this.characterSource.asObservable();

  /**
   * .ctor
   * @param http - http client.
   */
  constructor(
    private http: HttpClient,
  ) { }

  /**
   * Getting films info from DB.
   * @returns observable array of films.
   */
  public getDBFilmsData(): Observable<FilmModel[]> {
    return this.http.get<DbDataDto>(`https://proj-0-8c535.firebaseio.com/swapi.json`).pipe(
      map(response => response.films.map(filmProps => this.createFilmModelByDTO(filmProps.fields))),
      take(1),
    );
  }

  /**
   * Translates DTO data about film to the film model.
   * @param filmDTO - film DTO that includes info about properties name from DB.
   * @returns film model.
   */
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

  /**
   * Getting people info from DB.
   * @returns observable array of people.
   */
  public getDBCharactersData(): Observable<CharacterModel[]> {
    return this.http.get<DbDataDto>(`https://proj-0-8c535.firebaseio.com/swapi.json`).pipe(
      map(response => response.people.map(peopleProps => this.createCharacterModelByDTO(peopleProps.fields))),
      take(1),
    );
  }

  /**
   * Translates DTO data about character to the model.
   * @param charDTO - character DTO that includes info about properties name from DB.
   * @returns character model.
   */
  private createCharacterModelByDTO(charDTO: CharacterDTO): CharacterModel {
    return new CharacterModel({
      birthYear: charDTO.birth_year,
      gender: charDTO.gender,
      eyeColor: charDTO.eye_color,
      hairColor: charDTO.hair_color,
      height: parseInt(charDTO.height, 10),
      homeworld: charDTO.homeworld,
      mass: parseInt(charDTO.mass, 10),
      name: charDTO.name,
      skinColor: charDTO.skin_color,
    });
  }

  /**
   * Makes selected character visible for other components.
   * @param character - selected from table.
   */
  public transportSelectedCharacter(character: CharacterModel): void {
    this.characterSource.next(character);
  }

}

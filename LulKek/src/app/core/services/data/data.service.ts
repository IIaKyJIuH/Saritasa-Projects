import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { take, map, tap } from 'rxjs/operators';

import { CharacterDTO } from '../DTOs/character-dto';
import { DbDataDto } from '../DTOs/dbData-dto';
import { FilmDTO } from '../DTOs/film-dto';
import { CharacterModel } from '../models/character-model';
import { FilmModel } from '../models/film-model';

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
 ***REMOVED*****REMOVED*** Global observable of the film to be used in others components.
***REMOVED***
  public transportedFilm$: Observable<FilmModel> = this.filmSource.asObservable();

***REMOVED***
 ***REMOVED*****REMOVED*** Needed for transporting between two non-connected components.
***REMOVED***
  private characterSource: BehaviorSubject<CharacterModel> = new BehaviorSubject(new CharacterModel({}));

***REMOVED***
 ***REMOVED*****REMOVED*** Global observable of the characters from the film accessible for other components.
***REMOVED***
  public transportedCharacter$: Observable<CharacterModel> = this.characterSource.asObservable();

***REMOVED***
 ***REMOVED*****REMOVED*** .ctor
 ***REMOVED*****REMOVED*** @param http - http client.
***REMOVED***
  constructor(
    private http: HttpClient,
  ) { }

***REMOVED***
 ***REMOVED*****REMOVED*** Getting films info from DB.
 ***REMOVED*****REMOVED*** @returns observable array of films.
***REMOVED***
  public getDBFilmsData(): Observable<FilmModel[]> {
    return this.http.get<DbDataDto>(`https://proj-0-8c535.firebaseio.com/swapi.json`).pipe(
      map(response => response.films.map(filmProps => this.createFilmModelByDTO(filmProps.fields))),
      take(1),
    );
  }

***REMOVED***
 ***REMOVED*****REMOVED*** Translates DTO data about film to the film model.
 ***REMOVED*****REMOVED*** @param filmDTO - film DTO that includes info about properties name from DB.
 ***REMOVED*****REMOVED*** @returns film model.
***REMOVED***
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

***REMOVED***
 ***REMOVED*****REMOVED*** Getting people info from DB.
 ***REMOVED*****REMOVED*** @returns observable array of people.
***REMOVED***
  public getDBCharactersData(): Observable<CharacterModel[]> {
    return this.http.get<DbDataDto>(`https://proj-0-8c535.firebaseio.com/swapi.json`).pipe(
      map(response => response.people.map(peopleProps => this.createCharacterModelByDTO(peopleProps.fields))),
      take(1),
    );
  }

***REMOVED***
 ***REMOVED*****REMOVED*** Translates DTO data about character to the model.
 ***REMOVED*****REMOVED*** @param charDTO - character DTO that includes info about properties name from DB.
 ***REMOVED*****REMOVED*** @returns character model.
***REMOVED***
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

***REMOVED***
 ***REMOVED*****REMOVED*** Makes selected character visible for other components.
 ***REMOVED*****REMOVED*** @param character - selected from table.
***REMOVED***
  public transportSelectedCharacter(character: CharacterModel): void {
    this.characterSource.next(character);
  }

}

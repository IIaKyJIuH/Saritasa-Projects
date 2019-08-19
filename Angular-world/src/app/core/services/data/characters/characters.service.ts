import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AppConfig } from 'src/app/core/app-config';

import { CharacterDto } from '../../dtos/character-dto';
import { PropertiesDto } from '../../dtos/properties-dto';
import { CharacterModel } from '../../models/character-model';

/**
 * Works with the Db 'people' info.
 */
@Injectable({
  providedIn: 'root',
})
export class CharactersService {

  constructor(
    private http: HttpClient,
    private config: AppConfig,
  ) { }

  /**
   * Getting people info from Db.
   * @returns observable array of people.
   */
  public getDbCharactersData(): Observable<CharacterModel[]> {
    return this.http.get<PropertiesDto<CharacterDto>[]>(`${this.config.FIREBASE_SWAPI_URL}/people.json`).pipe(
      map(response => response.map((peopleProps, index) => this.createCharacterModelByDto(peopleProps.fields, index))),
      take(1),
    );
  }

  /**
   * Getting preferred character from Db.
   * @param characterIndex - character index according to the Db swapi file.
   * @returns observable character.
   */
  public getDbCharacterData(characterIndex: number): Observable<CharacterModel> {
    return this.http.get<PropertiesDto<CharacterDto>[]>(`${this.config.FIREBASE_SWAPI_URL}/people.json`).pipe(
      map(response => response
        .filter((props, i) => i === characterIndex)
        .map(characterProps => this.createCharacterModelByDto(characterProps.fields, characterIndex))[0]),
      take(1),
    );
  }

  /**
   * Translates Dto data about character to the model.
   * @param charDto - character Dto that includes info about properties name from Db.
   * @returns character model.
   */
  private createCharacterModelByDto(charDto: CharacterDto, index: number): CharacterModel {
    return new CharacterModel({
      databaseId: index,
      birthYear: charDto.birth_year,
      gender: charDto.gender,
      eyeColor: charDto.eye_color,
      hairColor: charDto.hair_color,
      height: parseInt(charDto.height, 10),
      homeworld: charDto.homeworld,
      mass: parseInt(charDto.mass, 10),
      name: charDto.name,
      skinColor: charDto.skin_color,
    });
  }
}

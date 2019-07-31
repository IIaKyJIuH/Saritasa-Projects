import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, mergeMap } from 'rxjs/operators';
import { CharactersService } from 'src/app/core/services/data/characters/characters.service';
import { FilmsService } from 'src/app/core/services/data/films/films.service';

import { CharacterModel } from '../../core/services/models/character-model';
import { FilmModel } from '../../core/services/models/film-model';

/**
 * About all film details.
 */
@Component({
  selector: 'app-detailed-film-info',
  templateUrl: './detailed-film-info.component.html',
  styleUrls: ['./detailed-film-info.component.css'],
})
export class DetailedFilmInfoComponent {

  /**
   * Film that is interesting to user.
   */
  public film$: Observable<FilmModel>;

  /**
   * Characters related to the film.
   */
  public characters$: Observable<CharacterModel[]>;

  /**
   * .ctor
   * @param dataService - works with all the data from FireBase database.
   */
  constructor(
    private filmsService: FilmsService,
    private charactersService: CharactersService,
    private activatedRouter: ActivatedRoute,
  ) {
    this.initializeFilm();
    this.initializeCharacters();
  }

  /**
   * Gets film selected by user.
   */
  private initializeFilm(): void {
    this.film$ = this.activatedRouter.paramMap.pipe(
      switchMap(params => this.filmsService.getDbFilmData(parseInt(params.get('id'), 10))),
    );
  }

  /**
   * Gets only whose characters that are relevant to the film, using data from database.
   */
  public initializeCharacters(): void {
    this.characters$ = this.film$.pipe(
      map(film => film.characters),
      mergeMap(characterPKs => this.charactersService.getDbCharactersData().pipe(
        map(characters => characters.filter((character, i) => characterPKs.includes(i + 1))),
      )),
    );
  }

}

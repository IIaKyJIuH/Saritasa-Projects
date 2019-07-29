import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import { DataService } from '../core/services/data/data.service';
import { CharacterModel } from '../core/services/models/character-model';
import { FilmModel } from '../core/services/models/film-model';

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
   * Characters participated in the film.
   */
  public characters$: Observable<CharacterModel[]>;

  /**
   * .ctor
   * @param dataService - works with all the data from FireBase database.
   */
  constructor(
    private dataService: DataService,
    private router: Router,
  ) {
    this.film$ = this.dataService.transportedFilm$;
    this.initializeCharacters();
  }

  /**
   * Gets only whose characters that are relevant to the film, using data from database.
   */
  private initializeCharacters(): void {
    this.characters$ = this.film$.pipe(
      map(film => film.characters),
      mergeMap(characterIndexes => this.dataService.getDBCharactersData().pipe(
        map(characters => characters.filter((character, i) => i in characterIndexes)),
      )),
    );
  }

  /**
   * Redirects to detailed info about selected character.
   */
  public onClick(event: CharacterModel): void {
    this.dataService.transportSelectedCharacter(event);
    this.router.navigateByUrl('/detailed-character-info');
  }

}

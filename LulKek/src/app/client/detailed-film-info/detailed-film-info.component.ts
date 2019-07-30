import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, mergeMap } from 'rxjs/operators';
import { CharactersService } from 'src/app/core/services/data/characters/characters.service';
import { FilmsService } from 'src/app/core/services/data/films/films.service';

import { CharacterModel } from '../../core/services/models/character-model';
import { FilmModel } from '../../core/services/models/film-model';

***REMOVED****
***REMOVED*** About all film details.
***REMOVED***/
@Component({
  selector: 'app-detailed-film-info',
  templateUrl: './detailed-film-info.component.html',
  styleUrls: ['./detailed-film-info.component.css'],
})
export class DetailedFilmInfoComponent {

***REMOVED***
 ***REMOVED*****REMOVED*** Film that is interesting to user.
***REMOVED***
  public film$: Observable<FilmModel>;

***REMOVED***
 ***REMOVED*****REMOVED*** Characters related to the film.
***REMOVED***
  public characters$: Observable<CharacterModel[]>;

***REMOVED***
 ***REMOVED*****REMOVED*** .ctor
 ***REMOVED*****REMOVED*** @param dataService - works with all the data from FireBase database.
***REMOVED***
  constructor(
    private filmsService: FilmsService,
    private charactersService: CharactersService,
    private router: Router,
    private activatedRouter: ActivatedRoute,
  ) {
    this.initializeFilm();
    this.initializeCharacters();
  }

***REMOVED***
 ***REMOVED*****REMOVED*** Gets film selected by user.
***REMOVED***
  private initializeFilm(): void {
    this.activatedRouter.paramMap.pipe(
      switchMap(params => params.get('id')),
    ).subscribe(
      id => {
        this.film$ = this.filmsService.getDbFilmData(parseInt(id, 10));
      });
  }

***REMOVED***
 ***REMOVED*****REMOVED*** Gets only whose characters that are relevant to the film, using data from database.
***REMOVED***
  public initializeCharacters(): void {
    this.characters$ = this.film$.pipe(
      map(film => film.characters),
      mergeMap(characterPKs => this.charactersService.getDbCharactersData().pipe(
        map(characters => characters.filter((character, i) => characterPKs.includes(i + 1))),
      )),
    );
  }

***REMOVED***
 ***REMOVED*****REMOVED*** Redirects to detailed info about selected character.
***REMOVED***
  public onClick(selectedCharacterIndex: number): void {
    this.router.navigateByUrl(`/detailed-character-info/${selectedCharacterIndex}`);
  }

}

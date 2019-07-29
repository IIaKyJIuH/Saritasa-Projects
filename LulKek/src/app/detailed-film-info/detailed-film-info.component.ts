import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import { DataService } from '../core/services/data/data.service';
import { CharacterModel } from '../core/services/models/character-model';
import { FilmModel } from '../core/services/models/film-model';

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
 ***REMOVED*****REMOVED*** Characters participated in the film.
***REMOVED***
  public characters$: Observable<CharacterModel[]>;

***REMOVED***
 ***REMOVED*****REMOVED*** .ctor
 ***REMOVED*****REMOVED*** @param dataService - works with all the data from FireBase database.
***REMOVED***
  constructor(
    private dataService: DataService,
    private router: Router,
  ) {
    this.film$ = this.dataService.transportedFilm$;
    this.initializeCharacters();
  }

***REMOVED***
 ***REMOVED*****REMOVED*** Gets only whose characters that are relevant to the film, using data from database.
***REMOVED***
  private initializeCharacters(): void {
    this.characters$ = this.film$.pipe(
      map(film => film.characters),
      mergeMap(characterIndexes => this.dataService.getDBCharactersData().pipe(
        map(characters => characters.filter((character, i) => i in characterIndexes)),
      )),
    );
  }

***REMOVED***
 ***REMOVED*****REMOVED*** Redirects to detailed info about selected character.
***REMOVED***
  public onClick(event: CharacterModel): void {
    this.dataService.transportSelectedCharacter(event);
    this.router.navigateByUrl('/detailed-character-info');
  }

}

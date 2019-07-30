import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CharactersService } from 'src/app/core/services/data/characters/characters.service';

import { CharacterModel } from '../../core/services/models/character-model';

/**
 * About all interesting details of the specific character.
 */
@Component({
  selector: 'app-detailed-character-info',
  templateUrl: './detailed-character-info.component.html',
  styleUrls: ['./detailed-character-info.component.css'],
})
export class DetailedCharacterInfoComponent {

  /**
   * Info about character.
   */
  public character$: Observable<CharacterModel>;

  /**
   * .ctor
   * @param dataService - working with all the data from the Db.
   */
  constructor(
    private charactersService: CharactersService,
    private activatedRouter: ActivatedRoute,
  ) {
    this.initializeCharacter();
  }

  /**
   * Gets film selected by user.
   */
  private initializeCharacter(): void {
    this.character$ = this.activatedRouter.paramMap.pipe(
      switchMap(params => this.charactersService.getDbCharacterData(parseInt(params.get('id'), 10)),
    ));
  }

}

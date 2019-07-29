import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from '../core/services/data/data.service';
import { CharacterModel } from '../core/services/models/character-model';

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
   * @param dataService - working with all the data from the DB.
   */
  constructor(
    private dataService: DataService,
  ) {
    this.character$ = this.dataService.transportedCharacter$;
  }

}

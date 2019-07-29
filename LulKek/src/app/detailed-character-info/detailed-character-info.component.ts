import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from '../core/services/data/data.service';
import { CharacterModel } from '../core/services/models/character-model';

***REMOVED****
***REMOVED*** About all interesting details of the specific character.
***REMOVED***/
@Component({
  selector: 'app-detailed-character-info',
  templateUrl: './detailed-character-info.component.html',
  styleUrls: ['./detailed-character-info.component.css'],
})
export class DetailedCharacterInfoComponent {

***REMOVED***
 ***REMOVED*****REMOVED*** Info about character.
***REMOVED***
  public character$: Observable<CharacterModel>;

***REMOVED***
 ***REMOVED*****REMOVED*** .ctor
 ***REMOVED*****REMOVED*** @param dataService - working with all the data from the DB.
***REMOVED***
  constructor(
    private dataService: DataService,
  ) {
    this.character$ = this.dataService.transportedCharacter$;
  }

}

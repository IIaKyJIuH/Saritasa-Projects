import { Component } from '@angular/core';

import { DataService } from '../core/services/data/data.service';

***REMOVED****
***REMOVED*** Profile of authorized person with table from DB data.
***REMOVED***/
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {

***REMOVED***
 ***REMOVED*****REMOVED*** .ctor
 ***REMOVED*****REMOVED*** @param authService - authorization service
***REMOVED***
  constructor(private dataService: DataService) {
    this.initializeDBData();
   }

***REMOVED***
 ***REMOVED*****REMOVED*** JSON object of DB data.
***REMOVED***
  private dbData: any;

***REMOVED***
 ***REMOVED*****REMOVED*** Initializes dbData.
***REMOVED***
  private initializeDBData(): void {
    this.dataService.getDBData()
    .subscribe((resp: any) => localStorage.setItem('dbData', JSON.stringify(resp)));
    this.dbData = JSON.parse(localStorage.getItem('dbData'));
  }

***REMOVED***
 ***REMOVED*****REMOVED*** Returns list of all films from our DB, ordered according to the release date.
 ***REMOVED*****REMOVED*** @returns Array<Films>
***REMOVED***
  public getFilms(): Array<object> {
    return this.dbData.films.map( ({fields}) => fields ).sort(film => film.episode_id);
  }

}

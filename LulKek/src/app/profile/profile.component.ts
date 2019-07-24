import { Component } from '@angular/core';

import { DataService } from '../core/services/data/data.service';

/**
 * Profile of authorized person with table from DB data.
 */
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {

  /**
   * .ctor
   * @param authService - authorization service
   */
  constructor(private dataService: DataService) {
    this.initializeDBData();
   }

  /**
   * JSON object of DB data.
   */
  private dbData: any;

  /**
   * Initializes dbData.
   */
  private initializeDBData(): void {
    this.dataService.getDBData()
    .subscribe((resp: any) => localStorage.setItem('dbData', JSON.stringify(resp)));
    this.dbData = JSON.parse(localStorage.getItem('dbData'));
  }

  /**
   * Returns list of all films from our DB, ordered according to the release date.
   * @returns Array<Films>
   */
  public getFilms(): Array<object> {
    return this.dbData.films.map( ({fields}) => fields ).sort(film => film.episode_id);
  }

}

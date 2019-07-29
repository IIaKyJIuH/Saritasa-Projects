import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderModule } from 'ngx-order-pipe';
import { Observable } from 'rxjs';

import { DataService } from '../core/services/data/data.service';
import { FilmModel } from '../core/services/models/film-model';

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
   * Array of films from DB.
   */
  public films$: Observable<FilmModel[]>;

  /**
   * .ctor
   * @param authService - authorization service
   */
  constructor(
    private dataService: DataService,
    private router: Router,
    ) {
    this.films$ = this.dataService.getDBFilmsData();
   }

  /**
   * Redirects user to a detailed info about chosen film.
   * @param event - film selected from the table line.
   */
  public onClick(event: FilmModel): void {
    this.dataService.transportSelectedFilm(event);
    this.router.navigateByUrl('/detailed-film-info');
  }

}

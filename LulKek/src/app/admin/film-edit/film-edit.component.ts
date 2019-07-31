import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from 'src/app/core/services/data/films/films.service';

/**
 * Here admin can edit films information.
 */
@Component({
  selector: 'app-film-edit',
  templateUrl: './film-edit.component.html',
  styleUrls: ['./film-edit.component.css'],
})
export class FilmEditComponent {

  constructor(
    private activatedRoute: ActivatedRoute,
    private filmsService: FilmsService,
  ) {
    let id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
   }

}

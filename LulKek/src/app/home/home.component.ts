import { Component, OnInit } from '@angular/core';

/**
 * Home page.
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  /**
   * Project title.
   */
  public title = 'LulKek';

  /**
   * .ctor
   */
  constructor() { }

  /**
   * @inheritdoc
   */
  public ngOnInit(): void {
  }

}

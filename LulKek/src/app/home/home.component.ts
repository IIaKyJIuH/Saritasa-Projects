import { Component, OnInit } from '@angular/core';

/**
 * Про домашнюю страницу.
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /**
   * Название проекта.
   */
  title = 'LulKek';

  /**
   * .ctor
   */
  constructor() { }

  /**
   * @inheritdoc
   */
  ngOnInit(): void {
  }

}

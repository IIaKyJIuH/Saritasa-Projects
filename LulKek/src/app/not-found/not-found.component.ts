import { Component, OnInit } from '@angular/core';

/**
 * Page not-found component.
 */
@Component({
  selector: 'app-not-found',
  template: `<h3> Страница не найдена </h3>`,
})
export class NotFoundComponent implements OnInit {

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

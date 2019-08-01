/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdminFilmsService } from './admin-films.service';

describe('Service: AdminFilms', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminFilmsService]
    });
  });

  it('should ...', inject([AdminFilmsService], (service: AdminFilmsService) => {
    expect(service).toBeTruthy();
  }));
});

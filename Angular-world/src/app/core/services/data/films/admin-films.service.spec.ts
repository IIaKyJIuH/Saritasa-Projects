/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { AdminFilmsService } from './admin-films.service';

describe('Service: AdminFilms', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminFilmsService],
    });
  });

  it('should ...', inject([AdminFilmsService], (service: AdminFilmsService) => {
    expect(service).toBeTruthy();
  }));
});

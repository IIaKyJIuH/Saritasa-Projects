/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { CharactersService } from './characters.service';

describe('Service: Characters', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharactersService],
    });
  });

  it('should ...', inject([CharactersService], (service: CharactersService) => {
    expect(service).toBeTruthy();
  }));
});

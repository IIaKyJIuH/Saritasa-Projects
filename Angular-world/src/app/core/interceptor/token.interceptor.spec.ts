***REMOVED*** tslint:disable:no-unused-variable***REMOVED***/

import { TestBed, inject, waitForAsync } from '@angular/core/testing';

import { TokenInterceptor } from './token.interceptor';

describe('Service: Interceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenInterceptor],
    });
  });

  it('should ...', inject([TokenInterceptor], (service: TokenInterceptor) => {
    expect(service).toBeTruthy();
  }));
});

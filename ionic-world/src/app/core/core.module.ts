import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';

import { TokenInterceptor } from './tokens/token.interceptor';

***REMOVED****
***REMOVED*** @inheritdoc
***REMOVED***/
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
})
export class CoreModule  {

***REMOVED***
 ***REMOVED*****REMOVED*** Analogue of providers directive for NgModule from Angular 1.x.
***REMOVED***
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptor,
          multi: true,
    ***REMOVED*****REMOVED*****REMOVED***
      ],
  ***REMOVED*****REMOVED*****REMOVED***
  }
}

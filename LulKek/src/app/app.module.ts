import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientModule } from './client/client.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

***REMOVED****
***REMOVED*** @inheritdoc
***REMOVED***/
@NgModule({
   declarations: [AppComponent],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      CoreModule.forRoot(),
      ClientModule,
      SharedModule,
      AppRoutingModule,
   ],
   bootstrap: [AppComponent],
})
export class AppModule { }

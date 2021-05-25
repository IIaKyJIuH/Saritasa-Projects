import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AuthenticationPage } from './authentication.page';
import { AuthenticationPageRoutingModule } from './authentication.router.module';

/**
 * @inheritdoc
 */
@NgModule({
  declarations: [AuthenticationPage],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenticationPageRoutingModule,
  ],
})
export class AuthenticationModule { }

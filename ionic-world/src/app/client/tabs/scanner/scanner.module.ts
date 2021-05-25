import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProgressBarModule } from 'angular-progress-bar';

import { ScannerPage } from './scanner.page';

/**
 * @inheritdoc
 */
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ScannerPage }]),
    ProgressBarModule,
  ],
  declarations: [ScannerPage],
})
export class ScannerPageModule {}

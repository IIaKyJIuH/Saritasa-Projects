import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ArchivePage } from './archive.page';

/**
 * @inheritdoc
 */
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ArchivePage }]),
  ],
  declarations: [ArchivePage],
})
export class ArchivePageModule {}

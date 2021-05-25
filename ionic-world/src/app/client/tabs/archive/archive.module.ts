import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ArchivePage } from './archive.page';
import { ArchivePageRoutingModule } from './archive.router.module';
import { ImageModalPageModule } from './image-modal/image-modal.module';

/**
 * @inheritdoc
 */
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ArchivePageRoutingModule,
    ImageModalPageModule,
  ],
  declarations: [ArchivePage],
})
export class ArchivePageModule {}

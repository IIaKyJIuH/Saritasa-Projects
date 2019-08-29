import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ImageModelPage } from './image-model.page';

const routes: Routes = [
  {
    path: '',
    component: ImageModelPage,
  },
];

/**
 * @inheritdoc
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ImageModelPage],
})
export class ImageModelPageModule {}

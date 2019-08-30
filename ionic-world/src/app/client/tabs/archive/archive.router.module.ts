import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArchivePage } from './archive.page';

const routes: Routes = [
  {
    path: '',
    component: ArchivePage,
    children: [
      {
        path: 'image-modal',
        loadChildren: './image-modal/image-modal.module#ImageModalPageModule',
      },
    ],
  },
];

/**
 * @inheritdoc
 */
@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class ArchivePageRoutingModule {}

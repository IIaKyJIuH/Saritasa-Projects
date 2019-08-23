import { AuthGuard } from '@/app/core/guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'scanner',
      },
      {
        path: 'scanner',
        loadChildren: () =>
          import('./scanner/scanner.module').then(m => m.ScannerPageModule),
      },
      {
        path: 'archive',
        loadChildren: () =>
          import('./archive/archive.module').then(m => m.ArchivePageModule),
      },
    ],
  },
];

/**
 * @inheritdoc
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}

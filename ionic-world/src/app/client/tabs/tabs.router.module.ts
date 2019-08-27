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
   ***REMOVED*****REMOVED***
      {
        path: 'scanner',
        loadChildren: './scanner/scanner.module#ScannerPageModule',
   ***REMOVED*****REMOVED***
      {
        path: 'archive',
        loadChildren: './archive/archive.module#ArchivePageModule',
   ***REMOVED*****REMOVED***
    ],
***REMOVED***
];

***REMOVED****
***REMOVED*** @inheritdoc
***REMOVED***/
@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}

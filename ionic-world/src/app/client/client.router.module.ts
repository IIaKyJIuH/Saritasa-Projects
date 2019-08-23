import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth',
***REMOVED***
  {
    path: 'auth',
    loadChildren: './authentication/authentication.module#AuthenticationModule',
***REMOVED***
  {
    path: 'tabs',
    loadChildren: './tabs/tabs.module#TabsPageModule',
***REMOVED***
];

***REMOVED****
***REMOVED*** @inheritdoc
***REMOVED***/
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientPageRoutingModule {}

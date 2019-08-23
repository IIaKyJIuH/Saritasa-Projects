import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./client/tabs/tabs.module').then(m => m.TabsPageModule),
***REMOVED***
  {
    path: 'auth',
    loadChildren: () => import('./client/authentication/authentication.module').then(m => m.AuthenticationModule),
***REMOVED***
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
***REMOVED***
];

***REMOVED****
***REMOVED*** Main component routes.
***REMOVED***/
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

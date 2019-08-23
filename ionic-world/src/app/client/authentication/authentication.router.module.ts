import { AuthGuard } from '@/app/core/guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticationPage } from './authentication.page';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationPage,
    children: [
      {
        path: '',
        redirectTo: 'sign-in',
  ***REMOVED*****REMOVED*****REMOVED***
      {
        path: 'sign-in',
        loadChildren: () =>
          import('./sign-in/sign-in.module').then(m => m.SignInPageModule),
  ***REMOVED*****REMOVED*****REMOVED***
      {
        path: 'sign-up',
        loadChildren: () =>
          import('./sign-up/sign-up.module').then(m => m.SignUpPageModule),
  ***REMOVED*****REMOVED*****REMOVED***
    ],
***REMOVED***
];

***REMOVED****
***REMOVED*** @inheritdoc
***REMOVED***/
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationPageRoutingModule {}

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
   ***REMOVED*****REMOVED***
      {
        path: 'sign-in',
        loadChildren: './sign-in/sign-in.module#SignInPageModule',
   ***REMOVED*****REMOVED***
      {
        path: 'sign-up',
        loadChildren: './sign-up/sign-up.module#SignUpPageModule',
   ***REMOVED*****REMOVED***
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

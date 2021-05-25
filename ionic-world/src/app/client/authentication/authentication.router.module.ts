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
      },
      {
        path: 'sign-in',
        loadChildren: './sign-in/sign-in.module#SignInPageModule',
      },
      {
        path: 'sign-up',
        loadChildren: './sign-up/sign-up.module#SignUpPageModule',
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
export class AuthenticationPageRoutingModule {}

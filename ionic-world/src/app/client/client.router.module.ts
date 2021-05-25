import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth',
  },
  {
    path: 'auth',
    loadChildren: './authentication/authentication.module#AuthenticationModule',
  },
  {
    path: 'tabs',
    loadChildren: './tabs/tabs.module#TabsPageModule',
  },
];

/**
 * @inheritdoc
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientPageRoutingModule {}

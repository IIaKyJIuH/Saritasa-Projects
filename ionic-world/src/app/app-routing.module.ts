import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './client/client.module#ClientModule',
  },
  { path: 'image-model', loadChildren: './client/tabs/archive/image-modal/image-model/image-model.module#ImageModelPageModule' },
];

/**
 * Main component routes.
 */
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

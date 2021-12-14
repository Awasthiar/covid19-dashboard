import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'application',
    // loadChildren: './application/application.module#LandingModule'
    loadChildren: () => import('./application').then(app => app.LandingModule)
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true, preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

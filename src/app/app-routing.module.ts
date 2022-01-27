import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: `home`, loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: `about`, loadChildren: () =>
      import('./pages/about/about.module').then(m => m.AboutModule)
  },
  {
    path: `legions`, loadChildren: () =>
      import('./pages/legions/legions.module').then(m => m.LegionsModule)
  },
  {
    path: `battles`, loadChildren: () =>
      import('./pages/battles/battles.module').then(m => m.BattlesModule)
  },
  { 
    path: ``, redirectTo: `home`, pathMatch: `full` 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

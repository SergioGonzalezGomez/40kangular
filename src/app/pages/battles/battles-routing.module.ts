import { BattlesComponent } from './battles.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BattlesDetailComponent } from './components/battles-detail/battles-detail.component';

const routes: Routes = [
  {path: "", component: BattlesComponent},
  {path: ":idBattle", component: BattlesDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BattlesRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LegionsDetailComponent } from './components/legions-detail/legions-detail.component';
import { LegionsComponent } from './legions.component';

const routes: Routes = [
  {path: "", component: LegionsComponent},
  {path: ":idLegion", component: LegionsDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LegionsRoutingModule { }

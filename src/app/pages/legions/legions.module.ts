import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LegionsRoutingModule } from './legions-routing.module';
import { LegionsComponent } from './legions.component';
import { LegionsDetailComponent } from './components/legions-detail/legions-detail.component';


@NgModule({
  declarations: [
    LegionsComponent,
    LegionsDetailComponent
  ],
  imports: [
    CommonModule,
    LegionsRoutingModule,
    HttpClientModule
  ]
})
export class LegionsModule { }

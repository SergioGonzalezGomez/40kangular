import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BattlesRoutingModule } from './battles-routing.module';
import { BattlesComponent } from './battles.component';
import { BattlesDetailComponent } from './components/battles-detail/battles-detail.component';


@NgModule({
  declarations: [
    BattlesComponent,
    BattlesDetailComponent
  ],
  imports: [
    CommonModule,
    BattlesRoutingModule,
    HttpClientModule
  ]
})
export class BattlesModule { }

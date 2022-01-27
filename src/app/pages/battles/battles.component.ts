import { Component, OnInit } from '@angular/core';
import { BattlesInterface } from './models/Battles';
import { BattlesService } from './services/battles.service';
@Component({
  selector: 'app-battles',
  templateUrl: './battles.component.html',
  styleUrls: ['./battles.component.scss']
})
export class BattlesComponent implements OnInit {
  public battles: BattlesInterface[] = [];


  constructor(private battlesService: BattlesService) { }

  ngOnInit(): void {
    this.battlesService.getAllBattles().subscribe((data:any) => {
      const apiResults: BattlesInterface[] = data;
      const formattedBattles = apiResults.map(({ _id, name, year, place, traitorlegions, loyalistlegions, victory, img}) => ({
        _id, name, year, place, traitorlegions, loyalistlegions, victory, img
      }));
      this.battles = formattedBattles;
    })
    
  }

}

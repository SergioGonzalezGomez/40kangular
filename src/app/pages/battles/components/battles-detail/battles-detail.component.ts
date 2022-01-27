import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BattlesService } from '../../services/battles.service';
import { BattlesInterface } from '../../models/Battles';
@Component({
  selector: 'app-battles-detail',
  templateUrl: './battles-detail.component.html',
  styleUrls: ['./battles-detail.component.scss']
})
export class BattlesDetailComponent implements OnInit {
 public battle!: BattlesInterface;
  constructor(private activatedRoute: ActivatedRoute, private battlesService: BattlesService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const idBattle = params.get('idBattle');

      this.battlesService.getBattle(idBattle).subscribe((data: any) => {
        const apiResult: BattlesInterface = data;
        this.battle = apiResult;
      })
    })
  }

}

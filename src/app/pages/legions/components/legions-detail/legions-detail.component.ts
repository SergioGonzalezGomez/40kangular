import { LegionsService } from './../../services/legions.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LegionsInterface } from './../../models/Legions';

@Component({
  selector: 'app-legions-detail',
  templateUrl: './legions-detail.component.html',
  styleUrls: ['./legions-detail.component.scss']
})
export class LegionsDetailComponent implements OnInit {
public legion!: LegionsInterface;
  constructor(private activatedRoute: ActivatedRoute, private legionsService: LegionsService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const idLegion = params.get('idLegion');

      this.legionsService.getLegion(idLegion).subscribe((data:any) => {
        const apiResult: LegionsInterface = data;
        this.legion = apiResult;
        /* console.log("legion", this.legion) */
      })
    })
  }

}

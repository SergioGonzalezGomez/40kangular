import { Component, OnInit } from '@angular/core';
import { LegionsInterface } from './models/Legions';
import { LegionsService } from './services/legions.service';

@Component({
  selector: 'app-legions',
  templateUrl: './legions.component.html',
  styleUrls: ['./legions.component.scss']
})
export class LegionsComponent implements OnInit {
  public legions: LegionsInterface[] = [];
  constructor(private legionsService: LegionsService) { }

  ngOnInit(): void {
    this.legionsService.getAllLegions().subscribe((data:any) => {
      const apiResults: LegionsInterface[] = data;
      console.log(apiResults);
      const formattedLegions = apiResults.map(({_id, name, description, number, primarch, img, __v}) => ({
        _id, name, description, number, primarch, img, __v
      }));
      this.legions = formattedLegions

     /*  console.log(this.legions[0].id); */
    })
  }

}

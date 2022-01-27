import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BattlesService {

    public battlesURL: string = "http://localhost:5000/battles";

  constructor(private httpClient: HttpClient) { }

  public getAllBattles() {
    return this.httpClient.get(this.battlesURL)
  }

  public getBattle(idBattle: any) {
    return this.httpClient.get(`${this.battlesURL}/${idBattle}`)
  }
}


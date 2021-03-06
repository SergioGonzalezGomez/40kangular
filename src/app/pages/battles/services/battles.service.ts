import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BattlesService {

    public battlesURL: string = "https://40kangularserver.vercel.app/battles";

  constructor(private httpClient: HttpClient) { }

  public getAllBattles() {
    return this.httpClient.get(this.battlesURL)
  }

  public getBattle(idBattle: any) {
    return this.httpClient.get(`${this.battlesURL}/${idBattle}`)
  }
}


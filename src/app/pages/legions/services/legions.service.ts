import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LegionsService {
  public legionsURL: string = "https://40kangularserver.vercel.app/legions";

  constructor(private httpClient: HttpClient) { }

  public getAllLegions(){
    return this.httpClient.get(this.legionsURL)
  }

  public getLegion(idLegion: any){
    return this.httpClient.get(`${this.legionsURL}/${idLegion}`)
  }
}

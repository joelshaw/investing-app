import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  private marketUrl = '/data/market.json';

  constructor(private httpService: HttpClient) { }

  getMarketData() {
    return this.httpService.get(this.marketUrl);
  }
}

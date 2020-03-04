import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  constructor(private httpService: HttpClient) { }

  getMarketData() {
    return this.httpService.get('../data/market.json');
  }
}

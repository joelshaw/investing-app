import { Component, OnInit } from '@angular/core';
import { MarketService } from '../market.service';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.less']
})
export class PositionsComponent implements OnInit {
  market;

  constructor(private marketService: MarketService) { }

  ngOnInit() {
    this.marketService.getMarketData()
      .subscribe(res => this.market = res);
  }

}

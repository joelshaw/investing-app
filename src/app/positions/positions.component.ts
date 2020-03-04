import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.less']
})
export class PositionsComponent implements OnInit {

  public positions = [
    { symbol: 'tsla', price: 41.50 },
    { symbol: 'ford', price: 4.50 }
  ];

  constructor() { }

  ngOnInit() {
  }

}

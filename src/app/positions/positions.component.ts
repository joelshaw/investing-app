import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.less']
})
export class PositionsComponent implements OnInit {

  url = 'assets/data/market.json';
  positions;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(this.url).subscribe((data) => {
      console.log(data);
    });
  }

}

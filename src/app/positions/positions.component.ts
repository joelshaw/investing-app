import { Component, OnInit, Input, Output } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AccountsComponent } from '../accounts/accounts.component';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.less']
})
export class PositionsComponent implements OnInit {

  url = 'assets/data/market.json';
  positions: any = [];
  stocks: any = [];

  total = '12';

  @Input() accountData: string;

  constructor(private http: HttpClient) {}

  ngOnInit() {

    this.http.get(this.url).subscribe((data: any) => {
      this.positions = data.stocks;
    }, (err: HttpErrorResponse) => {
      console.log(err.message);
    });
  }

}

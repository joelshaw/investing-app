import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

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
  total: any;

  @Input() accountData: any;


  constructor(private http: HttpClient, public router: Router) {}

  ngOnInit() {
    this.total = this.accountData.qty;

    this.http.get(this.url).subscribe((data: any) => {
      this.positions = data.stocks;
    }, (err: HttpErrorResponse) => {
      console.log(err.message);
    });
  }

}

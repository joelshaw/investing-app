import { Component, OnInit, NgModule } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { PositionsComponent } from '../positions/positions.component';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.less']
})

@NgModule({
  imports: [ BrowserModule ],
  declarations: [PositionsComponent]
})

export class AccountsComponent implements OnInit {

  constructor(private http: HttpClient, public router: Router) { }

  url = 'assets/data/accountSummary.json';
  public accounts = [];

  accountSelected;
  active;
  expanded: boolean = false;

  public accountData = 'test';

  ngOnInit() {
    this.http.get(this.url).subscribe((data: any) => {
      this.accounts = data.accounts;
    },(err: HttpErrorResponse) => {
      console.log(err.message);
    });
  }

  displayDetails() {
      this.expanded = !this.expanded;
  }

  toggleAccountEdit() {

  }

  editAccountName() {
  }

}

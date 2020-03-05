import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.less']
})
export class AccountsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  url = 'assets/data/accountSummary.json';
  public accounts = [];

  accountSelected;

  ngOnInit() {
    this.http.get(this.url).subscribe((data:any) => {
      this.accounts = data.accounts;
      console.log(data.accounts)
    },(err: HttpErrorResponse) => {
      console.log(err.message);
    });
  }

}

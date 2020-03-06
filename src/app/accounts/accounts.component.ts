import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.less']
})
export class AccountsComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  url = 'assets/data/accountSummary.json';
  public accounts = [];

  accountSelected;
  active;
  expanded: boolean = false;

  ngOnInit() {
    this.http.get(this.url).subscribe((data:any) => {
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

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.less']
})
export class AccountsComponent implements OnInit {

  constructor() { }

  public accounts = [
    {name: 'account 1', close: 7000, current: 7000},
    {name: 'account 2', close: 17000, current: 6000},
    {name: 'account 3', close: 7000, current: 6000}
  ];

  ngOnInit() {
  }

}

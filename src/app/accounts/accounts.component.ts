import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.less']
})
export class AccountsComponent implements OnInit {

  constructor() { }

  name = 'account name';
  postion = 7;

  ngOnInit() {
  }

}

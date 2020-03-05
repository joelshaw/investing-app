import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.less']
})
export class ClientsComponent implements OnInit {

  public clients = [
    {name: 'Client 1', id: 1234},
    {name: 'Client 2', id: 4567}
  ];

  constructor() { }

  ngOnInit() {
  }

}

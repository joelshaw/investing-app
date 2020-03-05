import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  url = 'assets/data/clients.json';
  positions;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(this.url).subscribe((data) => {
      console.log(data);
    });
  }

}

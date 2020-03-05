import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.less']
})
export class ClientsComponent implements OnInit {

  url = 'assets/data/clients.json';
  clients: any[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(this.url).subscribe((data) => {
      this.clients = data.clients;
    });
  }

}

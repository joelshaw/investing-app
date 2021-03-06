import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.less']
})
export class ClientsComponent implements OnInit {

  url = 'assets/data/clients.json';
  clients: any[];
  constructor(private http: HttpClient, private activeRoute: ActivatedRoute, public router: Router) {}

  ngOnInit() {
    this.http.get(this.url).subscribe((data: any) => {
      this.clients = data.clients;
    }, (err: HttpErrorResponse) => {
      console.log(err.message);
    });
  }

}

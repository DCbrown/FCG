import { Component, OnInit } from '@angular/core';
// import { Client } from '../../models/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {

  clients: any;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
   // this.clients = this.clientService.getRandomClient();
  }

  generateClient(){
   // console.clear();
   // this.clients = this.clientService.getRandomClient();
  }
  


}

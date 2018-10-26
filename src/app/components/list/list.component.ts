import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service'
import { Client } from '../../models/client';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  clients: Client[];
  acceptedClients: Client[];
  inProgressClients: Client[];
  finishedClients: Client[];

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.acceptedClients = this.clientService.getAcceptedClients();
    // this.clientService.getRandomClient();
  }

  getRandomClient(){
    // this.clientService.getRandomClient();
  }

  onSelect(acceptedClient: Client) {
    console.log(acceptedClient);
  }

}

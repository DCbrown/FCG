import { Injectable } from '@angular/core';
import { Client } from '../models/client';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of'; 

@Injectable()
export class ClientService {

  clients: Client[];
  acceptedClients: Client[];
  inProgressClients: Client[];
  finishedClients: Client[];
  randomClient: any;

  private clientSource = new BehaviorSubject<Client>({id:null,
  firstName: null,
  lastName: null,
  picture: null,
  requestTitle: null,
  paragraphOne: null,
  paragraphTwo: null,
  paragraphThree: null,
  attachment: null,
  status: null,
  progress: null,
  notes: null,
  date: null });

  selectedClient = this.clientSource.asObservable();

  constructor() {
    this.clients = [
      {
        id:'5',
        firstName:'Jody',
        lastName: 'Summers',
        picture:'',
        requestTitle:'Need Web Developer',
        paragraphOne:'I need a web developer for my website',
        paragraphTwo:'I need a makeover',
        paragraphThree:'plus it needs to be responsive',
        attachment:null,
        status:'notAccepted',
        progress:0,
        notes:'',
        date: new Date('10/14/2018 12:54:43')
      },
      {
        id:'6',
        firstName:'Dan',
        lastName: 'Smith',
        picture:'',
        requestTitle:'Need Web Developer',
        paragraphOne:'I need a web developer for my website',
        paragraphTwo:'Can you make websites',
        paragraphThree:'Thank you for your time',
        attachment:null,
        status:'notAccepted',
        progress:0,
        notes:'',
        date: new Date('10/14/2018 12:54:43')
      },
      {
        id:'7',
        firstName:'Craig',
        lastName: 'Ceak',
        picture:'',
        requestTitle:'Need Web Developer',
        paragraphOne:'I need a web developer for my website',
        paragraphTwo:'I need 5 pages on my website',
        paragraphThree:'let me know',
        attachment:null,
        status:'notAccepted',
        progress:0,
        notes:'',
        date: new Date('10/14/2018 12:54:43')
      }
    ]

    this.acceptedClients = [
      {
        id:'1',
        firstName:'James',
        lastName: 'Dean',
        picture:'',
        requestTitle:'Need Web Developer',
        paragraphOne:'I need a web developer for my website',
        paragraphTwo:null,
        paragraphThree:null,
        attachment:null,
        status:'notAccepted',
        progress:0,
        notes:'',
        date: new Date('10/14/2018 12:54:43')
      },
      {
        id:'1',
        firstName:'Karen',
        lastName:'Joss',
        picture:'',
        requestTitle:'Need Web Developer ASAP',
        paragraphOne:'I need a web developer for my website',
        paragraphTwo:'I run an online shop',
        paragraphThree:null,
        attachment:null,
        status:'notAccepted',
        progress:0,
        notes:'',
        date: new Date('10/14/2018 12:54:43')
      },
      {
        id:'1',
        firstName:'Chris',
        lastName:'Forte',
        picture:'',
        requestTitle:'Need Web Developer',
        paragraphOne:'I need a web developer for my website',
        paragraphTwo: 'I starting an online biz',
        paragraphThree: 'I will need a logo as well',
        attachment:null,
        status:'notAccepted',
        progress:0,
        notes:'',
        date: new Date('10/14/2018 12:54:43')
      },
    ]
  }


  // ---Statuses---
  // notAccepted
  // Accepted
  // inProgress
  // finished

  getAcceptedClients() {
    return this.acceptedClients;
  }

  getRandomClient(): Client[]{
    this.randomClient = this.clients[Math.floor(Math.random() * this.clients.length)];
    console.log(this.randomClient);
    return this.randomClient;
  }  

  setSelectedClient(client: Client) {
    this.clientSource.next(client);
  }
  
  addClient(client: Client){
    this.acceptedClients.unshift(client);
  }

  /*
  getClients() {
    return this.clients;
  }
  */

  // use API at: https://uifaces.co/api-docs
}

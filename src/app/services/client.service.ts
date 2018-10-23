import { Injectable } from '@angular/core';
import { Client } from '../models/client';

@Injectable()
export class ClientService {

  clientRequest: Client[];
  acceptedClients: Client[];
  inProgressClients: Client[];
  FinishedClients: Client[];
  randomClient: any;

  constructor() {
    this.clientRequest = [
      {
        id:1,
        name:'Jude',
        picture:'',
        requestTitle:'Need a Web Developer',
        paragraphOne:'I need a WebSite1',
        paragraphTwo:'',
        paragraphThree:'',
        attachment:'',
        status:'notAccepted',
        progress:0,
        notes:''
      },
      {
        id:2,
        name:'Anthony',
        picture:'',
        requestTitle:'Need a Web Developer2',
        paragraphOne:'I need a WebSite2',
        paragraphTwo:'',
        paragraphThree:'',
        attachment:'',
        status:'notAccepted',
        progress:0,
        notes:''
      },
      {
        id:3,
        name:'Brandon',
        picture:'',
        requestTitle:'Need a Web Developer3',
        paragraphOne:'I need a WebSite3',
        paragraphTwo:'',
        paragraphThree:'',
        attachment:'',
        status:'notAccepted',
        progress:0,
        notes:''
      }
    ]
  }

  // ---Statuses---
  // notAccepted
  // Accepted
  // inProgress
  // finished

  getRandomClient(): Client[]{
    this.randomClient = this.clientRequest[Math.floor(Math.random() * this.clientRequest.length)];
    console.log(this.randomClient);
    return this.randomClient;
  }

  saveRandomClient(): Client[]{
    this.randomClient = this.randomClient;
    return this.randomClient; 
  }



  // use API at: https://uifaces.co/api-docs
}

import { Injectable } from '@angular/core';
import { Client } from '../models/client';

@Injectable()
export class ClientService {

  clientRequest: Client[];
  savedClients: Client[];

  constructor() {
    this.clientRequest = [
      {
        id:1,
        name:'John Doe',
        picture:'',
        requestTitle:'Need a Web Developer',
        paragraphOne:'I need a WebSite1',
        paragraphTwo:'',
        paragraphThree:'',
        attachment:'',
      },
      {
        id:2,
        name:'Jane Doe',
        picture:'',
        requestTitle:'Need a Web Developer2',
        paragraphOne:'I need a WebSite2',
        paragraphTwo:'',
        paragraphThree:'',
        attachment:'',
      },
      {
        id:3,
        name:'Jane Doe',
        picture:'',
        requestTitle:'Need a Web Developer3',
        paragraphOne:'I need a WebSite3',
        paragraphTwo:'',
        paragraphThree:'',
        attachment:'',
      }
    ]
  }

  getRandomClient(){
    return this.clientRequest[Math.floor(Math.random() * this.clientRequest.length)]
    
  }
}

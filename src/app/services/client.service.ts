import { Injectable } from '@angular/core';
import { Client } from '../models/client';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of'; 

@Injectable()
export class ClientService {

  clients: Client[];
  
  constructor() {
    this.clients = [
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

  getClients(){
    return this.clients;
  }


  // use API at: https://uifaces.co/api-docs
}

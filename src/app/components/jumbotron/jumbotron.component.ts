import { Component, OnInit } from '@angular/core';
// import { Client } from '../../models/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {

  id:string;
  firstName:string;
  lastName:string;
  picture:string;
  requestTitle:string;
  paragraphOne:string;
  paragraphTwo:string;
  paragraphThree:string;
  attachment:string;
  status:string;
  progress:number;
  notes:string;
  date: any;
  
  randomClient: any;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
   // this.clients = this.clientService.getRandomClient();
   this.randomClient = this.clientService.getRandomClient();
  }

  generateRandomClient(){
   // console.clear();
   // this.clients = this.clientService.getRandomClient();
   this.randomClient = this.clientService.getRandomClient();
  }
  
  addClient() {
    const newClient = this.randomClient
    /*
    const newClient = {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      picture: this.picture,
      requestTitle: this.requestTitle,
      paragraphOne: this.paragraphOne,
      paragraphTwo: this.paragraphTwo,
      paragraphThree: this.paragraphThree,
      attachment: this.attachment,
      status: this.status,
      progress: this.progress,
      notes: this.notes,
      date: new Date();
    }
    */

    this.clientService.addClient(newClient);

  }

}

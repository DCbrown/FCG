import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { ListComponent } from './components/list/list.component';
import { ClientService } from './services/client.service';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    JumbotronComponent,
    ListComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }

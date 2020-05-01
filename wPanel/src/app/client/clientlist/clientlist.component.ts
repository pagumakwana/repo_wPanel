import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  
import {ClientService} from "../_services/client.Service";

@Component({
  selector: 'app-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.scss']
})
export class ClientListComponent implements OnInit {
public clientData:any = [];
  constructor(public _clientServie:ClientService) { }

  ngOnInit(): void {
    this.getCategoryName();
  }

  modifyClientName(data) {

  }
   // get brand data
   getCategoryName() {
    this._clientServie.getClientList(0).subscribe(data => {
      this.clientData = data;
    }, error => {
      // this.alertService.error("Something went wrong !!");
    })
  }
}

// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { Routes, RouterModule } from '@angular/router';
import { ClientListComponent } from './clientlist.component';
import {ClientService} from "../_services/client.Service"

@NgModule({
    declarations: [
        ClientListComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: ClientListComponent
            }
        ]),
    ],
    providers: [ClientService]
})
export class ClientListModule { }

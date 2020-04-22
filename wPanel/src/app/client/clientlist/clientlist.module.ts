// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientListComponent } from './clientlist.component';
@NgModule({
    declarations: [
        ClientListComponent,
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: ClientListComponent
            }
        ]),
    ],
    providers: []
})
export class ClientListModule { }

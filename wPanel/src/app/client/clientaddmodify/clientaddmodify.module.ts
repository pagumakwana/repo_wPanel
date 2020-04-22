// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './clientaddmodify.component';
@NgModule({
    declarations: [
        ClientComponent,
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: ClientComponent
            }
        ]),
    ],
    providers: []
})
export class ClientModule { }

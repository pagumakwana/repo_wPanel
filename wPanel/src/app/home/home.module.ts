// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: HomeComponent
            }
        ]),
    ],
    providers: []
})
export class HomeModule { }

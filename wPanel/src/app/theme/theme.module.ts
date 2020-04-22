// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './client/body/body.component';
import { HeaderComponent } from './client/header/header.component';
import { FooterComponent } from './client/footer/footer.component';
import { SidebarComponent } from './client/sidebar/sidebar.component';
import { ThemeComponent } from './theme.component';
import { HomeModule } from '../home/home.module';
import { ThemeRoutingModule } from './theme-routing.module';
import { ClientListModule } from '../client/clientlist/clientlist.module';
import { ClientModule } from '../client/clientaddmodify/clientaddmodify.module';
@NgModule({
    declarations: [
        ThemeComponent,
        BodyComponent,
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
    ],
    imports: [
        RouterModule,
        ThemeRoutingModule,
        HomeModule,
        ClientModule,
        ClientListModule
    ],
    providers: []
})
export class ThemeModule { }

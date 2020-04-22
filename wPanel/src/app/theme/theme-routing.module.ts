
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThemeComponent } from './theme.component';

const routes: Routes = [
    {
        path: "",
        component: ThemeComponent,
        children: [
            {
                path: "dashboard",
                loadChildren: "../home/home.module#HomeModule"
            },
            {
                path: "client",
                loadChildren: "../client/clientaddmodify/clientaddmodify.module#ClientModule"
            },
            {
                path: "clientlist",
                loadChildren: "../client/clientlist/clientlist.module#ClientListModule"
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ThemeRoutingModule { }

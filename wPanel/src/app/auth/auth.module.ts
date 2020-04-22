import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
@NgModule({
    declarations: [
        AuthComponent
    ],
    imports: [
        RouterModule.forChild([
            {
              path: '',
              component: AuthComponent
            }
          ])
    ],
    providers: []
})
export class AuthModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { ThemeModule } from './theme/theme.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './_appService/api.service';
import { CommonService } from './_appService/common.service';
import { AppSessionService } from './_appService/appsession.service';
import { BaseServiceHelper } from './_appService/baseHelper.service';
import { EncryptedStorage } from './_appModel/encryptedstorage';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ThemeModule,
  ],
  providers: [
    ApiService,
    CommonService,
    AppSessionService,
    BaseServiceHelper,
    EncryptedStorage,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

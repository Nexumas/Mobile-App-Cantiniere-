import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import {NavbarComponent} from "./core/components/navbar/navbar.component";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
    declarations: [AppComponent, NavbarComponent],
  entryComponents: [],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, SharedModule, MatIconModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { OrdersMJComponent } from './orders-mj/orders-mj.component';
import { OrdersItemMJComponent } from './orders-item-mj/orders-item-mj.component';
import { OrdersDetailsMJComponent } from './orders-details-mj/orders-details-mj.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersMJComponent,
    OrdersItemMJComponent,
    OrdersDetailsMJComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

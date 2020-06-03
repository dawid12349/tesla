import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageOrderInfoComponent } from './page-order-info/page-order-info.component';
import { CompAddonComponent } from './comp-addon/comp-addon.component';
import { CompOrderComponent } from './comp-order/comp-order.component';
import { PagePrintingComponent } from './page-printing/page-printing.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PageOrderInfoComponent,
    CompAddonComponent,
    CompOrderComponent,
    PagePrintingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

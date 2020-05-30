import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageOrderInfoComponent } from './page-order-info/page-order-info.component';
import { CompAddonComponent } from './comp-addon/comp-addon.component';
import { CompOrderComponent } from './comp-order/comp-order.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PageOrderInfoComponent,
    CompAddonComponent,
    CompOrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

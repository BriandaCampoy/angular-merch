import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { OrdersComponent } from './pages/orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CheckoutComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

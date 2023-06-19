import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TabsPipe } from './pages/tabs.pipe';
import { ProductsPipe } from './pages/tabs/products.pipe';
import { CartPipe } from './pages/tabs/cart.pipe';
import { ServicesPipe } from './pages/tabs/services.pipe';

@NgModule({
  declarations: [AppComponent, TabsPipe, ProductsPipe, CartPipe, ServicesPipe],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

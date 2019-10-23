import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { RecentlyViewedProductComponent } from './recently-viewed-product/recently-viewed-product.component';
import { ListProductsComponent } from './list-products/list-products.component';
import {DatePipe} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import { BartitleComponent } from './bartitle/bartitle.component';
import { ShippingCartComponent } from './shipping-cart/shipping-cart.component';
import { AfterAddTocartComponent } from './after-add-tocart/after-add-tocart.component';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ProductViewComponent,
    RecentlyViewedProductComponent,
    ListProductsComponent,
    BartitleComponent,
    ShippingCartComponent,
    AfterAddTocartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

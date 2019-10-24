import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductViewComponent} from "./product-view/product-view.component";
import {ListProductsComponent} from "./list-products/list-products.component";
import {BartitleComponent} from "./bartitle/bartitle.component";
import {ShippingCartComponent} from "./shipping-cart/shipping-cart.component";
import {AfterAddTocartComponent} from "./after-add-tocart/after-add-tocart.component";
import {ContactComponent} from "./contact/contact.component";
import {CheckoutComponent} from "./checkout/checkout.component";
import {LoginComponent} from "./login/login.component";
import {UserAccount2Component} from "./user-account2/user-account2.component";


const routes: Routes = [
  {path: 'listProduct/:typeresearch/:catId/:other', component: ListProductsComponent,data: {animation: 'listproductPage'}},
  {path: 'listProductCategory/:typeresearch/:catId/:other', component: ListProductsComponent, data: {animation: 'byCategory'}},
  {path: 'shippingcart', component: ShippingCartComponent,data: {animation: 'shippingPage'}},
  {path: 'afteraddtocart/:message1/:message2', component: AfterAddTocartComponent,data: {animation: 'afteraddtocart'}},
  {path: 'contact', component: ContactComponent,data: {animation: 'contact'}},
  {path: 'checkout', component: CheckoutComponent,data: {animation: 'checkout'}},
  {path: 'login', component: LoginComponent,data: {animation: 'login'}},
  {path: 'register', component: UserAccount2Component,data: {animation: 'register'}},
  {path: 'viewArtwork/:id/:image1/:image2/:image3/:name/:category/:description/:newPrice', component: ProductViewComponent,data: {animation: 'viewProductPage'}},
  {path: 'bartitle',component:BartitleComponent,outlet:'bartitle'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

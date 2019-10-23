import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductViewComponent} from "./product-view/product-view.component";
import {ListProductsComponent} from "./list-products/list-products.component";
import {BartitleComponent} from "./bartitle/bartitle.component";
import {ShippingCartComponent} from "./shipping-cart/shipping-cart.component";
import {AfterAddTocartComponent} from "./after-add-tocart/after-add-tocart.component";


const routes: Routes = [
  {path: 'listProduct/:typeresearch/:catId/:other', component: ListProductsComponent,data: {animation: 'listproductPage'}},
  {path: 'listProductCategory/:typeresearch/:catId/:other', component: ListProductsComponent},
  {path: 'shippingcart', component: ShippingCartComponent,data: {animation: 'shippingPage'}},
  {path: 'afteraddtocart', component: AfterAddTocartComponent,data: {animation: 'afteraddtocart'}},
  {path: 'viewArtwork/:id/:image1/:image2/:image3/:name/:category/:description/:newPrice', component: ProductViewComponent,data: {animation: 'viewProductPage'}},
  {path: 'bartitle',component:BartitleComponent,outlet:'bartitle'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

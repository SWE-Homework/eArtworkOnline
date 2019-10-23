import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, RouterOutlet} from "@angular/router";
import {CategoryService} from "../service/category.service";
import {CartService} from "../service/cart.service";
import {slideInAnimation} from "../animations";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    slideInAnimation
    // animation triggers go here

  ]
})
export class HomeComponent implements OnInit {

  listCategory:any[]
  listCartItem;
  totalAmountCart;
  totalItemCart;
    /*=[
    {categoryId: 1, name: 'All Categories'},
    {categoryId: 2, name: 'Computers'},
    {categoryId: 3, name: 'Laptops'},
    {categoryId: 4, name: 'Cameras'},
    {categoryId: 5, name: 'Hardware'},
    {categoryId: 6, name: 'Smartphones'},
    {categoryId: 7, name: 'LastOne'}
  ]*/


  constructor(private _router: Router, private _activedRoute: ActivatedRoute,
              private categoryService: CategoryService,
              private cartService: CartService) {

  }

  ngOnInit(): void {
    this.cartService.emmitter.subscribe(dataEmit=>{
      this.totalAmountCart=dataEmit.totalPrice;
      this.totalItemCart=dataEmit.totalItem;
    })

    this.categoryService.getList().then(dateCat=>{
      this.listCategory=dateCat;
    })
    this.loadHomePage();
  }

  loadHomePage() {

    this._router.navigate(['listProduct',1,'',''], {skipLocationChange: true})

  }

  viewArtwork(productId) {
    this._router.navigate(['listArtwork',productId], {skipLocationChange: true})
  }

  loadBarTitle() {
    this._router.navigate([{outlets: {bartitle: ['bartitle']}}], {skipLocationChange: true})
  }

  getArtworksByCategory(catId){

    this._router.navigate(['listProductCategory',2,catId,''], {relativeTo:this._activedRoute})
  }

  loadShippingCart(){
    this._router.navigate(['shippingcart'], {skipLocationChange: true})
  }

  getCartItemInfo(){
    this.listCartItem=this.cartService.getItems();
    for(let i=0;i<this.listCartItem.length;i++){
      console.log("list : "+this.listCartItem);
      this.totalAmountCart+=(this.listCartItem[i].newPrice*this.listCartItem[i].quantity);
    }
    this.totalItemCart=this.listCartItem.length;
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}

import { Component, OnInit } from '@angular/core';
import {CartService} from "../service/cart.service";
import {UserService} from "../service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-shipping-cart',
  templateUrl: './shipping-cart.component.html',
  styleUrls: ['./shipping-cart.component.scss']
})
export class ShippingCartComponent implements OnInit {
  listItems;
  urlImage="assets/images/";
  totalItem=0;
  total:number=0;

  constructor(private cartService: CartService,
              private userService: UserService,
              private _router: Router) { }

  ngOnInit() {
    console.log("in 1");
    this.listItems=this.cartService.getItems();
    this.getTotal();
    console.log("in 2");
  }

  getTotal(){
    for(let i=0;i<this.listItems.length;i++){
      console.log("list : "+this.listItems);
      this.total+=(this.listItems[i].newPrice*this.listItems[i].quantity);
    }
  }

  checkout(){
    if(this.userService.isLoggedIn==true){
      this._router.navigate(['checkout'], {skipLocationChange: true})
    }else{
      this._router.navigate(['login'], {skipLocationChange: true})
    }
  }

  continueShopping(){
    this._router.navigate(['listProductCategory',1,'',''], {skipLocationChange: true})
  }

}

import { Component, OnInit } from '@angular/core';
import {CheckoutService} from "../service/checkout.service";
import {CartService} from "../service/cart.service";
import {UserService} from "../service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  listItems;
  urlImage="assets/images/";
  totalItem=0;
  total:number=0;

  constructor(private cartService: CartService,
              private userService: UserService,
              private checkoutService: CheckoutService,
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

}

import { Component, OnInit } from '@angular/core';
import {CartService} from "../service/cart.service";

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

  constructor(private cartService: CartService) { }

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

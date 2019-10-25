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

  placeOrder(){
    const shipping=this.checkoutService.formShipping.value;
    const payment=this.checkoutService.formPayment.value;

    let obj={
      "status": "P",
        "dateCreated": new Date(),
        "dateShipped": new Date(),
        "shippingInfo":{
        "shippingType":"",
          "shippingCost":this.cartService.getTotalPrice(),
          "shippingAddress":{
          "street": shipping.street,
            "city": shipping.city,
            "state": shipping.state,
            "zipcode": shipping.zip
        },
        "methodPayement":{
          "completeNameOnCard": payment.fullName,
            "cardNumber": payment.cardNumber,
            "expDate":"2015-10-10",
            "csvCode": payment.cvv
        }
      },
      "orderDetail": [
        {"quantity":"1",
          "unitCost":"12",
          "artWork":{
            "artworkId":1
          }
        }
      ]
    }

    this.checkoutService.placeOrder(obj,this.userService.userLogin.userAccountId);


    let obectTot={
      totalPrice: 0,
      totalItem: 0
    }
    this.cartService.emitValue(obectTot);

    this._router.navigate(['afteraddtocart','Your order has been placed successfully','Thank you for shopping with us'], {skipLocationChange: true})
    this.cartService.clearItems();

  }

  continueShopping(){
    this._router.navigate(['listProductCategory',1,'',''], {skipLocationChange: true})
  }

}

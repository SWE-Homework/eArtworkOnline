import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IArtwork} from "../model/IArtwork";
import {CartService} from "../service/cart.service";

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  image1;
  image2;
  image3;
  name;
  category;
  description;
  newPrice;
  id;

  constructor(private _router: Router,
              private activatedRoute: ActivatedRoute,
              private cateService: CartService) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get("id");
    this.image1=this.activatedRoute.snapshot.paramMap.get("image1");
    this.image2=this.activatedRoute.snapshot.paramMap.get("image2");
    this.image3=this.activatedRoute.snapshot.paramMap.get("image3");
    this.name=this.activatedRoute.snapshot.paramMap.get("name");
    this.category=this.activatedRoute.snapshot.paramMap.get("category");
    this.description=this.activatedRoute.snapshot.paramMap.get("description");
    this.newPrice=this.activatedRoute.snapshot.paramMap.get("newPrice");
  }

  addToCart(quantity){
    let artwork={
     artworkId: this.id,
      name:this.name,
      description:this.description,
      artiste:'',
      shippingWeight:0,
      amount:0,
      image1:this.image1,
      image2:this.image2,
      image3:this.image3,
      recommended:0,
      newPrice:parseFloat(this.newPrice),
      category:this.category,
      quantity: parseInt(quantity),
    }


      this.cateService.addItem(artwork);
      let total=this.getTotal();
      let obectTot={
        totalPrice: total,
        totalItem: this.cateService.items.length
      }
       this.cateService.emitValue(obectTot);

    this._router.navigate(['afteraddtocart','Artwork added successfully','Thank you for shopping with us'], {skipLocationChange: true})
  }

  getTotal(): number{
    let tot=0;
    for(let i=0;i<this.cateService.items.length;i++){
      console.log("list : "+this.cateService.items);
      tot+=(this.cateService.items[i].newPrice*this.cateService.items[i].quantity);
    }

    return tot;
  }

}

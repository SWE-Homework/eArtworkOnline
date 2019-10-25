import { Component, OnInit } from '@angular/core';
import {ArtworkService} from "../service/artwork.service";
import {IArtwork} from "../model/IArtwork";
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  //listProducts:IArtwork[];
  pictureLo:string='assets/images/view_1.jpg';
  urlImage='assets/images/';
  listProducts=[];
  typeResearch:number=1;//1=All recommended;2=by category;3=category and contain (artist or other)


  constructor(private service: ArtworkService,
              private _router: Router, private _activedRoute: ActivatedRoute) {



     /* if(this.listProducts.length<6) {
        let nbToAdd = 6 - this.listProducts.length;
        for (let i = 0; i < nbToAdd; i++) {
          this.listProducts.push(
            {
              artworkId: 0,
              name: '',
              description: '',
              artiste: '',
              shippingWeight: 0,
              amount: 0,
              category: 0
            }
          )
        }
      }*/






  }

  ngOnInit() {
    this.typeResearch=parseInt(this._activedRoute.snapshot.paramMap.get("typeresearch"));
    let catId=this._activedRoute.snapshot.paramMap.get("catId");
    let other=this._activedRoute.snapshot.paramMap.get("other");
    //this.getProducts();
    let res;
    if(this.typeResearch==1){
      console.log("equal one and good");
      res=this.service.getList();
    }else if(this.typeResearch==2){
      console.log("equal 2 and good");
      res=this.service.getListByCategory(catId);
    }else{
      console.log("equal 3 and good");
      res=this.service.getListByCategoryAndOther(catId,other);
    }

    res.then(data => {
      console.log(data);
      console.log(this.listProducts);
      this.listProducts = data;

      console.log('after',this.listProducts);
    })
  }

  viewProduct(productId,image1,image2,image3,name,category,description,newPrice){

      this._router.navigate(['viewArtwork',productId,image1,image2,image3,name,category,description,newPrice], {skipLocationChange: true})

  }
}

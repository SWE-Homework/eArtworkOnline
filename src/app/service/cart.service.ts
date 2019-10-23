import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class CartService {
  items= [];
  emmitter=new EventEmitter<object>();
  emitValue(value:object){
    this.emmitter.emit(value);
  }

  constructor(private httpClient: HttpClient) { }

  addItem(product){
    this.items.push(product);
  }

  getItems(){
    return this.items;
  }

  clearItems(){
    this.items=[];
    return this.items;
  }

  getChippingPrices(){
    return this.httpClient.get('/assets/shipping.json');
  }
}

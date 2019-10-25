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

  getTotalPrice(){
    let total=0;
    for(let i=0;i<this.items.length;i++){
      console.log("list : "+this.items);
      total+=(this.items[i].newPrice*this.items[i].quantity);
    }
    return total;
  }




}

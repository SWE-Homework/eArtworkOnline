import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  formShipping: FormGroup=new FormGroup({
    street: new FormControl('',[Validators.required]),
    city: new FormControl(''),
    state: new FormControl(''),
    zip: new FormControl('')
  })

  formPayment: FormGroup=new FormGroup({
    fullName: new FormControl(''),
    cardNumber: new FormControl(''),
    month: new FormControl(''),
    year: new FormControl(''),
    cvv: new FormControl('')
  })

  constructor(private httpClient: HttpClient) { }

  placeOrder(obj,userId){
    console.log("Im in here and ..."+userId)
    return this.httpClient.post("http://localhost:8080/eartwork/api/checkout/proceed/"+userId,obj)
      .subscribe(dataMes=>{
      console.log("sucess pogo to place order"+dataMes)
    },error => {
      console.log("error found "+error);
    })
  }
}

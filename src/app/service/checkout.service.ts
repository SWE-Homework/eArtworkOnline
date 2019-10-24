import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  formShipping: FormGroup=new FormGroup({
    street: new FormControl(''),
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

  constructor() { }
}

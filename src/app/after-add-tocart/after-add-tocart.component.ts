import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-after-add-tocart',
  templateUrl: './after-add-tocart.component.html',
  styleUrls: ['./after-add-tocart.component.scss']
})
export class AfterAddTocartComponent implements OnInit {

  constructor(private _router: Router,
              private userService: UserService) { }

  ngOnInit() {
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

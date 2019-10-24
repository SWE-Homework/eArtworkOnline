import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-after-add-tocart',
  templateUrl: './after-add-tocart.component.html',
  styleUrls: ['./after-add-tocart.component.scss']
})
export class AfterAddTocartComponent implements OnInit {
  message1;
  message2;

  constructor(private _router: Router,
              private userService: UserService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.message1=this.activatedRoute.snapshot.paramMap.get("message1");
    this.message2=this.activatedRoute.snapshot.paramMap.get("message2");
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

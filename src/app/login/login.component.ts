import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService,
              private _router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.userService.loginIn()==true){

      let obj={
        signin: "Sign out"
      }
      this.userService.emitValue(obj);
      this.userService.initializeForm();
      this._router.navigate(['checkout'], {skipLocationChange: true})
    }

  }



}

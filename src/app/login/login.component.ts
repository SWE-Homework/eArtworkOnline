import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService,
              private _router: Router) { }
  errorMessageLogin = '  ';

  ngOnInit() {
  }
  onSubmit() {

    this.userService.loginIn().subscribe(resp => {
        console.log("I m here login fail to check")
        if (resp != null) {
          this.userService.userLogin = resp;
          this.userService.isLoggedIn=true;
          const obj = {
            signin: 'Sign out'
          };
          this.userService.emitValue(obj);
          this.userService.initializeForm();
          this._router.navigate(['checkout'], {skipLocationChange: true});
        }else{
          this.errorMessageLogin = 'Invalid Credentials';
        }
      },
      error => {
      console.log("Error login fails")
        this.errorMessageLogin = 'Errror : '+error;
      }
    );
    //
    //
    //
    //
    //
    //
    // if (this.userService.loginIn() == null) {
    //
    //   const obj = {
    //     signin: 'Sign out'
    //   };
    //   this.userService.emitValue(obj);
    //   this.userService.initializeForm();
    //   this._router.navigate(['checkout'], {skipLocationChange: true});
    // } else {
    //   this.errorMessageLogin = 'Invalid Credentials';
    // }

  }



}

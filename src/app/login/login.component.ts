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
        if (resp != null) {
          this.userService.userLogin = JSON.parse(JSON.stringify(resp));
          const obj = {
            signin: 'Sign out'
          };
          this.userService.emitValue(obj);
          this.userService.initializeForm();
          this._router.navigate(['checkout'], {skipLocationChange: true});
        }
      },
      error => {
        this.errorMessageLogin = 'Invalid Credentials';
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

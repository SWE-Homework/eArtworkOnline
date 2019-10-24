import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ICategory} from "../model/ICategory";
import {IUserAccount} from "../model/IUser-account";

@Injectable({
  providedIn: 'root'
})

export class UserAccountService {

  constructor(private httpClient: HttpClient) { }

  formUserAccount: FormGroup=new FormGroup({
    userAccountId: new FormControl(null),
    firstName: new FormControl("",Validators.required),
    lastName: new FormControl("", ),
    email: new FormControl("", [Validators.required,Validators.email]),
    password: new FormControl("", Validators.required),
    //loginStatus: new FormControl(""),
    //roleUser: new FormControl(""),
    //userProfilePic: new FormControl(),
    //active: new FormControl("")
  });
  user:any;
  uploadURL = "http://localhost:8080/eartwork/api/uploadSingleFile";
  userAddUrl = "http://localhost:8080/eartwork/api/useraccount/add";
  userProfilePic: File = null;
  userProfilePicRui="";
  save(user) {


         this.user = {
          userProfilePic: '',
          userAccountId: null,
          firstName: this.formUserAccount.get('firstName').value,
          lastName: this.formUserAccount.get('lastName').value,
          email: this.formUserAccount.get('email').value,
          password: this.formUserAccount.get('password').value,

        }

        this.httpClient.post(this.userAddUrl, this.user).subscribe(resp => {
            console.log("Successfull : "+resp)
            this.formUserAccount.reset()
            return ({ message:"Successfull :"});
          },
          error => {
            console.log("Error : "+error.error)
            return ({ message:"error message :" + error});
          }
        );




  }

}

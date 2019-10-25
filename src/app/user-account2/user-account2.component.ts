import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material";
import {NotificationService} from "../shared/notification.service";
import {DialogService} from "../shared/dialog.service";
import {UserAccountService} from "../service/user-account.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-account2',
  templateUrl: './user-account2.component.html',
  styleUrls: ['./user-account2.component.scss']
})
export class UserAccount2Component implements OnInit {
  listAccountType=[
    'ADMIN',
    'CUSTOMER'
  ]

  constructor(private service: UserAccountService,
              private dialog:MatDialog,private notificationService:NotificationService,
              private dialogService: DialogService,
              private _router:Router) { }
  uploadResponse = { status: '', message: '', filePath: '' }
  ngOnInit() {
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = <File>event.target.files[0];
      this.service.userProfilePic = event.target.files[0];
      console.log(file);

    }
  }

  onSubmit(obj) {
    let resp = this.service.save(obj);

    console.log("Answer : "+resp);
    this._router.navigate(['afteraddtocart','Registration done successfully','Thank you for joining us'], {skipLocationChange: true})

  }

  onClear(){
    this.service.formUserAccount.reset();
  }
}

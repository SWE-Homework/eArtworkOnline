import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'eArtworkOnline';

  constructor(private _router: Router, private _activedRoute: ActivatedRoute) {

  }

  ngOnInit(){
    this.loadHomePage();
  }

  loadHomePage() {

    this._router.navigate(['listProduct'], {skipLocationChange: true})

  }

  viewArtwork(productId) {
    this._router.navigate(['listArtwork',productId], {skipLocationChange: true})
  }

  loadBarTitle() {
    this._router.navigate([{outlets: {bartitle: ['bartitle']}}], {skipLocationChange: true})
  }



}

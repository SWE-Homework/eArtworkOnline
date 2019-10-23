import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DatePipe} from "@angular/common";
import {Observable,of} from "rxjs";
import {delay} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class ArtworkService {

  constructor(private httpClient: HttpClient,private datePipe: DatePipe) { }


  getList() {
    /*return of([
      {artworkId: 1, name: 'Paul', desc: 'Autre', picture: 'assets/images/view_1.jpg'},
      {artworkId: 2, name: 'Jean', desc: 'Bueno', picture: 'assets/images/view_2.jpg'},
      {artworkId: 3, name: 'Mano', desc: 'Nada', picture: 'assets/images/view_3.jpg'},
      {artworkId: 1, name: 'Paul', desc: 'Autre', picture: 'assets/images/view_1.jpg'},
      {artworkId: 2, name: 'Jean', desc: 'Bueno', picture: 'assets/images/view_2.jpg'},
      {artworkId: 3, name: 'Mano', desc: 'Nada', picture: 'assets/images/view_3.jpg'}
    ])*/
   return this.httpClient.get<any[]>("http://localhost:8080/eartwork/api/artworks/list").toPromise()

  }

  getListByCategory(catId) {

    return this.httpClient.get<any[]>("http://localhost:8080/eartwork/api/artworks/getByCategory/"+catId).toPromise()

  }

  getListByCategoryAndOther(catId,other) {

    return this.httpClient.get<any[]>("http://localhost:8080/eartwork/api/artworks/getByCategory/"+catId+"/"+other).toPromise()

  }


}

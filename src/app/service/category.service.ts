import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IArtwork} from '../model/IArtwork';
import {ICategory} from '../model/ICategory';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  getList() {
    return this.httpClient.get<any[]>('http://localhost:8080/eartwork/api/categories/list').toPromise();
  }



}

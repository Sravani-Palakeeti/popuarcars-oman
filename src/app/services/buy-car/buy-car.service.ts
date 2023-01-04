import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompareService } from '../compare/compare.service';

const endpoint = 'http://localhost:3000/cars';
@Injectable({
  providedIn: 'root'
})
export class BuyCarService {

  // private _localStorage!: Storage;

  constructor(private http: HttpClient) {
    // this._localStorage = CompareService.localStorage
  }
  getAllPosts(): Observable<any> {
    return this.http.get(endpoint);
  }
}

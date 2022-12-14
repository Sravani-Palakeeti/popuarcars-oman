import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const endpoint = 'http://localhost:3000/cars';
@Injectable({
  providedIn: 'root'
})
export class BuyCarService {

  constructor(private http: HttpClient) {}
  getAllPosts(): Observable<any> {
    return this.http.get(endpoint);
  }
}

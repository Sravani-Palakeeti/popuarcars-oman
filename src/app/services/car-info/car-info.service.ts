import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

// const endpoint = 'http://localhost:3200/car-info';
@Injectable({
  providedIn: 'root'
})
export class CarInfoService {
  constructor(private http: HttpClient) {}
  // getAllPosts(): Observable<any> {
  //   return this.http.get(endpoint);
  // }
  getAllPosts(){
    return this.http.get<any>("http://localhost:3000/car-info")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}

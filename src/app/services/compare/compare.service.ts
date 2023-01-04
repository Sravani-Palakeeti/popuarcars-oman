import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

const endpoint = 'http://localhost:3000/car-info';
@Injectable({
  providedIn: 'root'
})

export class CompareService {

 constructor(private http: HttpClient) { }
getAllPosts(): Observable<any> {
  return this.http.get(endpoint);
}

 }

 
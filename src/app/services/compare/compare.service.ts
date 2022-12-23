import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Injectable({
  providedIn: 'root'
})
export class CompareService {

  public compareList:any = []
  public carList = new BehaviorSubject<any>([])

  constructor(private http:HttpClient) {}
  getCars(){
    return this.carList.asObservable()
  }

  addtoCompare(car:any){
    this.compareList.push(car)
    this.carList.next(this.compareList)
    console.log(this.compareList)
  }

  removeCompareItem(car:any) {
    this.compareList.map((a:any, index:any)=>{
      if(car.id == a.id){
        this.compareList.splice(index,1)
      }
      this.carList.next(this.compareList)
    })
  }

  removeAllCompare(){
    this.compareList = []
    this.carList.next(this.compareList)
  }

}

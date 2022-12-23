import { Component, OnInit } from '@angular/core';
import { CompareService } from 'src/app/services/compare/compare.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {
  
  public cars : any = []
  constructor ( private compareService : CompareService ) {}
  ngOnInit(): void {
    this.compareService.getCars().subscribe(res=>{
      this.cars = res;
      console.log(res)
    })
  } 

  removeItem(item:any){
    this.compareService.removeCompareItem(item)
  }

  emptyCompare(){
    this.compareService.removeAllCompare()
  }

}

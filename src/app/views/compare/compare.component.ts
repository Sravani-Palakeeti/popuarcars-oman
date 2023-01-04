import { Component, OnInit } from '@angular/core';
import { BuyCarService } from 'src/app/services/buy-car/buy-car.service';
import { CarInfoService } from 'src/app/services/car-info/car-info.service';
import { CompareService } from 'src/app/services/compare/compare.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {
  
  public selected_items : any = []
  public Products: any=[];

  constructor( public carService: CarInfoService, public compareService : CompareService) { }



  
  ngOnInit(): void {

    
    this.fetchPosts();
  } 


  fetchPosts(): void {
    const compare = localStorage.getItem('compare');
    if(compare){
       var data = JSON.parse(compare);
    }

    this.carService.getAllPosts().subscribe(
      (response) => {
        response.map((item:any, key:number)=>{
          data.map((selected:any)=>{
              if(item.id==selected){
                this.Products[key]=item;
              }
          })
        })
        console.log(this.Products)
      },
      (error) => {
        console.log(error);
      }
    );
  }





}

import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from '@angular-slider/ngx-slider';
import { BuyCarService } from 'src/app/services/buy-car/buy-car.service';
import { CompareService } from 'src/app/services/compare/compare.service';
import { CarInfoService } from 'src/app/services/car-info/car-info.service';

@Component({
  selector: 'app-buy-cars',
  templateUrl: './buy-cars.component.html',
  styleUrls: ['./buy-cars.component.scss']
})
export class BuyCarsComponent implements OnInit {
  products: any;
  url: any;
  item_data:any;
  compareVehicles:any[] = [];

  minValue: number = 0;
  maxValue: number = 60000;
  options: Options = {
    floor: 0,
    ceil: 60000,
    step: 500,
    showTicks: false,
    translate: (value: number): string => {
      return 'OMR ' + value;
    }
  };

  minValue1: number = 0;
  maxValue1: number = 50000;
  options1: Options = {
    floor: 0,
    ceil: 50000,
    step: 500,
    showTicks: false,
    translate: (value: number): string => {
      return value + ' km ';
    }
  };

  minValue2: number = 0;
  maxValue2: number = 25;
  options2: Options = {
    floor: 0,
    ceil: 25,
    step: 1,
    showTicks: false,
    translate: (value: number): string => {
      return value + ' years';
    }
  };

  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 4;
  tableSizes: any = [10, 25, 50, 75, 100];

  constructor( public carService: BuyCarService, private carinfoService: CarInfoService, public compareService : CompareService) { }
  
  ngOnInit(): void {
    this.fetchPosts();
    this.fetchPosts2();
    this.compareVehicles=[];

  }

  checkCheckBoxvalue(comparevalue:any, isChecked: any){
    if (isChecked.target.checked) {
      this.compareVehicles.push(comparevalue);
      alert('Car Added to Compare List')
    } else {
      this.compareVehicles = this.compareVehicles.filter((newitem)=>newitem!=comparevalue);
    }
    console.log(this.compareVehicles)
    localStorage.setItem("compare", JSON.stringify(this.compareVehicles));
    

  }

  fetchPosts(): void {
    this.carService.getAllPosts().subscribe(
      (response) => {
        this.POSTS = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }


  fetchPosts2(): void {
    this.url = window.location.href;
    var item_id = this.url.split('/')[4] ;
    this.carinfoService.getAllPosts().subscribe(
      (response) => {
        this.products = response;
        for(var key in response){
          if(response[key]['id']==item_id){
           this.item_data=response[key]
          }
        }
      },
      (error) => {
        console.log(error);
      }
    );
  } 

  onTableDataChange(event: any) {
    this.page = event;
    this.fetchPosts();
  }

}



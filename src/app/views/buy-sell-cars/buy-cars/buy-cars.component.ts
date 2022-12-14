import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from '@angular-slider/ngx-slider';
import { BuyCarService } from 'src/app/services/buy-car/buy-car.service';

@Component({
  selector: 'app-buy-cars',
  templateUrl: './buy-cars.component.html',
  styleUrls: ['./buy-cars.component.scss']
})
export class BuyCarsComponent implements OnInit {

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
  constructor(private carService: BuyCarService,) { }
  ngOnInit(): void {
    this.fetchPosts();
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
  onTableDataChange(event: any) {
    this.page = event;
    this.fetchPosts();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }
}

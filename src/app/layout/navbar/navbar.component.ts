import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {



    let count=0;
    // get the JSON string from localStorage
    const compare = localStorage.getItem('compare');
    if(compare){
      // convert JSON string to relevant object
      const parsedArray = JSON.parse(compare);
      count=parsedArray.length;
    }
    console.log(count)

  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss']
})
export class CompanyProfileComponent implements OnInit {

  img = "/assets/images/about/company.jpg"
  para1 = "Established in 2006, Popular Cars is the pre-owned cars division of Suhail Bahwan Automobiles, a leading automobile dealership in the Sultanate of Oman. At Popular Pre-owned Cars, you will find an impressive array of top-quality pre-owned vehicles across various ranges, brands and models."
  para2 = "All our vehicles - Passenger Cars, 4WDs, Pick Ups or Commercial Vehicles - come to you with new benefits at pre-owned prices."
  para3 = "We are committed to your satisfaction and look forward to build enduring relationships with all our customers. We aim to achieve that by offering you the best deals in terms of value, service and quality when it comes to buying or selling a pre-owned vehicle."
  para4 = "Popular Pre-owned Cars has an impressive network of showrooms across major cities and towns in the Sultanate of Oman. Each showroom has a team of professionals dedicated to assist you with buying or selling vehicles."
  para5 = "Buying a pre-owned car is usually considered a risky business. But not when you are dealing with us. We offer you smart deals, special discount financing offers along with comprehensive customer service to making the buying / selling process a more convenient and hassle-free experience. Our certified pre-owned vehicles meet the age and mileage requirements established by the manufacturer and are placed only for sale after being put through rigorous inspections and quality checks. At Popular Pre-owned cars, you can count on us for reliability, quality and satisfaction. So that you can drive away in that perfect car you’ve always dreamt about"

  constructor() { }

  ngOnInit(): void {
  }

}

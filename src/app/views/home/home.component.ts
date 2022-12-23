import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // slider images
  images = [
    "../../../assets/images/slider-images/img-8.png",
    "../../../assets/images/slider-images/img-9.png",
    "../../../assets/images/slider-images/img-7.png"
  ]

  // find car
  budget = [
    "Select Budget",
    "OMR 0 - OMR 1000",
    "OMR 1001 - OMR 2000",
    "OMR 2001 - OMR 3000",
    "OMR 3001 - OMR 4000",
    "OMR 4001 - OMR 5000",
    "OMR 5001 - OMR 6000",
    'OMR 6001 - OMR 7000',
    'OMR 7001 - OMR 8000',
    'OMR 8001 - OMR 9000',
    'OMR 9001 - OMR 10000',
    'OMR 10001 - OMR 15000',
    'OMR 15001 - OMR 20000',
    'OMR 20001 - OMR 25000',
    'OMR 25001 - OMR 30000',
    'OMR 30001 - OMR 35000',
    "OMR 35001 - OMR 40000",
    "OMR 40001 - OMR 45000",
    "OMR 45001 - OMR 50000"
  ]

  brand = [
    "Select Brand",
    "changan",
    "foton",
    "nissan",
    "renault"
  ]

  kilometer = [
    "Select Kilometer",
    "below 20000",
    "20001 to 40000",
    "40001 to 60000",
    "60001 to 80000",
    "80001 to 99000",
    "99001 and above"
  ]

  carage = [
    "Select Car Age",
    "0 year - 5 years",
    "6 years - 10 years",
    "11 years - 16 years",
    "17 years - 20 years",
    "21 yers - 25 years"
  ]

  fueltype = [
    "Select Fuel Type",
    "petrol",
    "diesel"
  ]

  bodytype = [
    "Select Body Type",
    "commercial",
    "crossover",
    "sedan",
    "suv"
  ]
  
  // select car section
  selectcarheading = "select a car that suits your budget "

  // who we are section
  whoweareheading = "who are we ?"
  para1 = "Established in 2006, Popular Cars is the pre-owned cars division of Suhail Bahwan Automotive Group (SBAG), a leading automobile dealership in the Sultanate of Oman. At Popular Pre-owned Cars, you will find an impressive array of top-quality pre-owned vehicles across various ranges, brands and models."
  para2 = "All our vehicles - Passenger Cars, 4WDs, Pick Ups or Commercial Vehicles - come to you with new benefits at pre-owned prices."
  img = "../../../assets/images/WhoWeAreLargeImage(2).jpg"

  // testimonial
  testimonialheading = "testimonials";
  testimonials = [
    {
      testimonialtext: "Good Hospitality, Nice Approach, Finance Facility is good. Staffs are very supportive.",
      testimonialnames: "Mr. Jebanesa"
    },
    {
      testimonialtext: "Good Service, I am happy with it and I want to continue my dealing with popular pre-owned car in future",
      testimonialnames: "Mr. Anwar Al Sadi"
    },
    {
      testimonialtext: "The service  was fabulous, I was helped with most of the procedures. Thank you for all the attention",
      testimonialnames: "Mr. Halil Akteke"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

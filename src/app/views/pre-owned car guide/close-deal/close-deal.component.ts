import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-close-deal',
  templateUrl: './close-deal.component.html',
  styleUrls: ['./close-deal.component.scss']
})
export class CloseDealComponent implements OnInit {
  
  img = "../../../../assets/images/pre-owned-car-guide/close-the-deal.jpg"
  pageheading = "close the deal"
  heading = [
    {
      heading : "finalising the deal",
      headingtext : "After the car has been taken for a final test drive and all necessary legal documents are put in order, the price has to be finalised. For most transactions, bargaining is still a part of the process. Whether you like to bargain or not, you can control the situation by simply keeping the price of the car totally separate from the discussion. Many sellers - especially dealers - will try to convince you that the car you are looking at is the “ideal car.” While this may or may not be true, you should be sure in your own mind that the car is worth the asking price based on a thorough inspection by an independent technician or diagnostic service as well as your own research. Above all, do not let yourself be pressurized into a deal."
    },
    {
      heading : "final note",
      headingtext : "Before buying a used car, get it checked by a mechanic or a technician whom you trust. A used car may have major mechanical or structural problems. Replacements of important parts may be costly and hard to find. The seller/dealer may misrepresent the car's mileage or condition; and warranty coverage may not be available."
    }
  ]
  sideheading = "paper work"
  headingcontent = [
    {
      headline:"legal documents",
      text:"All the required legal documents such as Mulkiya (Registration), Insurance Certificate and Service Book must be in order."
    },  
    {
      headline:"mulkiya",
      text:"Check whether the previous owner has cleared all the dues."
    }, 
    {
      headline:"insurance certificate",
      text:"Check whether the car is covered under third party insurance or comprehensive insurance. Check whether the premium has been paid at regular intervals."
    }, 
    {
      headline:"service book",
      text:"The entries in this book will provide information on the time intervals the car has undergone servicing."
    }, 
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

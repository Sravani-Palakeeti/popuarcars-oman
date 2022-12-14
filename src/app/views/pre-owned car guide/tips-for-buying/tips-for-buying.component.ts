import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tips-for-buying',
  templateUrl: './tips-for-buying.component.html',
  styleUrls: ['./tips-for-buying.component.scss']
})
export class TipsForBuyingComponent implements OnInit {
  img = "../../../../assets/images/pre-owned-car-guide/tips-for-buying.jpg"
  pageheading = "tips for buying"
  para =[ {
    text:"Always take someone with you who has a good working knowledge about automobiles - irrespective of whether you are seeing a dealer or an individual seller."
  },
  {
    text:"Do not get elated about anything you see. A seller will be less inclined to negotiate with you if you give him the impression that you have just found 'the perfect car.'"
  },
  {
    text:"Do not hesitate to ask the seller any questions you may have."
  },
  {
    text:"Never let the dealer know the price you are willing to pay. If you are asked the price you have in mind, you may reply: 'I am looking for a small car. It may be a five or six-year-old model with an AC. Can you please show me a few cars in this category?'"
  },
  {
    text:"Even if you need finance, do not let the dealer know about it up front. It may weaken your bargaining stand."
  },
  {
    text:"Please drive extensively the car(s) that suit(s) your choice and budget."
  },
  {
    text:"Always inspect the car under daylight."
  }
]

heading = "Type of owner(s)"
onwerscontent = "Preferably, go for a single-owner car. A car owned by a professional or a lady is often found to be a well- maintained. Check up on the complete past history of the car owner(s)."


  constructor() { }

  ngOnInit(): void {
  }

}

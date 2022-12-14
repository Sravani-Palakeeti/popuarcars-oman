import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finance-companies',
  templateUrl: './finance-companies.component.html',
  styleUrls: ['./finance-companies.component.scss']
})
export class FinanceCompaniesComponent implements OnInit {

  pageheading = "finance companies"
  banks = [
   {
     img : "../../../../assets/images/finance/muscatfinace.jpg",
     name : "Muscat Finance",
     link : ""
   },
   {
    img : "../../../../assets/images/finance/taageetfinancejpg.jpg",
    name : "Taageer Finance",
    link : ""
  },
  {
    img : "../../../../assets/images/finance/al-omaniya.jpg",
    name : "Al Omania",
    link : ""
  },
  {
    img : "../../../../assets/images/finance/national_finance.jpg",
    name : "National Finance",
    link : ""
  },
  {
    img : "../../../../assets/images/finance/orix.jpg",
    name : "Oman orix Leasing",
    link : ""
  },
  {
    img : "../../../../assets/images/finance/united_finance.jpg",
    name : "United Finance",
    link : ""
  },
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}

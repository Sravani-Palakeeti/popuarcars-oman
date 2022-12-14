import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.scss']
})
export class BanksComponent implements OnInit {

  pageheading = "banks"
 banks = [
  {
    img : "../../../../assets/images/finance/bankmuscat.jpg",
    name : "Bank Muscat",
    link : "https://www.bankmuscat.com/en/Pages/default.aspx"
  },
  {
    img : "../../../../assets/images/finance/hsbc.jpg",
    name : "HSBC",
    link : "https://www.hsbc.ae/loans/products/car/"
  },
  {
    img : "../../../../assets/images/finance/omanarabfinance.jpg",
    name : "Oman Arab Bank",
    link : "https://www.oman-arabbank.com/"
  },
  {
    img : "../../../../assets/images/finance/bankdhofar.jpg",
    name : "Bank Dhofar",
    link : "https://www.bankdhofar.com/en-GB/Car_Loan.aspx"
  },
  {
    img : "../../../../assets/images/finance/banksohar.jpg",
    name : "Bank Sohar",
    link : "http://www.banksohar.net/"
  },
  {
    img : "../../../../assets/images/finance/ahlibank.jpg",
    name : "Ahil Bank",
    link : "http://ahlibank.om/"
  }

 ]
 
  constructor() { }

  ngOnInit(): void {
  }

}

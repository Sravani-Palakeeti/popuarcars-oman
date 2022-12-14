import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-islamic-banking',
  templateUrl: './islamic-banking.component.html',
  styleUrls: ['./islamic-banking.component.scss']
})
export class IslamicBankingComponent implements OnInit {
  
  pageheading = "islamic banking"
  banks = [
   {
     img : "../../../../assets/images/finance/banknizwa.jpg",
     name : "Bank Nizwa",
     link : "https://www.banknizwa.om/"
   },
   {
     img : "../../../../assets/images/finance/meethaq.jpg",
     name : "Meethaq Islamic Banking",
     link : "https://www.meethaq.om/en/Pages/default.aspx"
   },
   {
     img : "../../../../assets/images/finance/muzn_islamic_banking.jpg",
     name : "Muzn Islamic Banking",
     link : "https://www.muzn.om/en/retailbanking/Financing/"
   },
   {
     img : "../../../../assets/images/finance/alizz_islamic_bank.jpg",
     name : "Alizz Islamic Bank",
     link : "https://alizzislamic.com/"
   },
 ]
  constructor() { }

  ngOnInit(): void {
  }

}

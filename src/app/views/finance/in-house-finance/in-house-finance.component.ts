import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-in-house-finance',
  templateUrl: './in-house-finance.component.html',
  styleUrls: ['./in-house-finance.component.scss']
})
export class InHouseFinanceComponent implements OnInit {

  img = "../../../../assets/images/finance/inhouseFinance.jpg"
pageheading = "in-house finance"
content = "Popular Pre-owned Cars extends finance facilities to Individuals (Nationals & Expatriates) and to Corporate Establishments on purchase of pre-owned cars from us."
list = [
  { lists: "Easy Monthly Installments"},
  { lists: "Competitive Interest rate"},
  { lists: "Flexible down payment"},
  { lists: "Personalised Repayments"},
  { lists: "Easy Processing"},
  { lists: "Easy Documentations"},
  { lists: "Ready Approvals"},
  { lists: "Flexible Repayments"},
  { lists: "No Hidden Charges"}
]
tbl1 = "../../../../assets/images/finance/inhouse_tbl1_en.jpg"
tbl1heading = "loan amount"
tbl1text = "Used Cars - We Finance up to 85% of the value of the used car"
tbl2 = "../../../../assets/images/finance/inhouse_tbl2_en.jpg"
tbl2heading = "Documentation"
tbl2heading2 = "For Companies & Establishments"
requirements = [
  {data: "Copy of National ID Card, Sponsor/Partners, passport & Resident card for expats"},
  {data: "Registration Certificate."},
  {data: "Chamber of Commerce Certificates."},
  {data: "MOCI Sheets."},
  {data: "Specimen Signature Form."},
  {data: "Latest Electricity Bill & Municipal License."},
  {data: "Rental Agreement."},
  {data: "Last 6 months Bank Statements."},
]
tbl2heading3 = "individual"
individualtext = "The Following documents are required to enable us to process your finance request."
individualRequirements = [
  {text:"Salary certificate" },
  {text:"Copy of National ID / Labour Card" },
  {text:"Copy of Passport (Expatriates)" },
  {text:"Copy of Omani driving license" },
  {text:"Bank statement of last three months" },
]
tbl2heading4 = "commercial"
commercialList = [
  {data: "Copy of National ID card of Sponsor(s)/Partner(s)"},
  {data: "Copy of C.R. Certificate"},
  {data: "Copy of Computer Printout"},
  {data: "Copy of Specimen Signature"},
  {data: "Copy of Omani driving license"},
  {data: "Bank statement of last 3 months"},
]
tbl2heading5 = "repayment"
repaymentlist = [
  {data: "Repayment tenure ranges from 1 year to 5 years for New cars."},
  {data: "Maximum loan tenure for used car would depend on the age of the car."},
  {data: "Payments through post-dated cheques (PDCs)"},
  {data: "Option of replacing PDC with cash is also available."},
  {data: "Pre-payment option available"},
]
tbl2heading6 = "application process" 
applicationtext = "You may contact the nearest showroom of our branch for the best deal available on the car of your choice."
process = [
  {data: "Email us at popularcars@suhailbahwanautogroup.com  "},
  {data: "You may also contact us +968 96330422"},
]


  constructor() { }

  ngOnInit(): void {
  }

}

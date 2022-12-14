import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivacyPolicyComponent } from './layout/privacy-policy/privacy-policy.component';
import { CompanyProfileComponent } from './views/about/company-profile/company-profile.component';
import { ShowroomsComponent } from './views/about/showrooms/showrooms.component';
import { BuyCarsComponent } from './views/buy-sell-cars/buy-cars/buy-cars.component';
import { CarInfoComponent } from './views/buy-sell-cars/car-info/car-info.component';
import { CurrentOffersComponent } from './views/buy-sell-cars/current-offers/current-offers.component';
import { SellCarsComponent } from './views/buy-sell-cars/sell-cars/sell-cars.component';
import { CompareComponent } from './views/compare/compare.component';
import { ContactComponent } from './views/contact/contact.component';
import { BanksComponent } from './views/finance/banks/banks.component';
import { FinanceCompaniesComponent } from './views/finance/finance-companies/finance-companies.component';
import { InHouseFinanceComponent } from './views/finance/in-house-finance/in-house-finance.component';
import { IslamicBankingComponent } from './views/finance/islamic-banking/islamic-banking.component';
import { HomeComponent } from './views/home/home.component';
import { CloseDealComponent } from './views/pre-owned car guide/close-deal/close-deal.component';
import { CarLoanComponent } from './views/pre-owned car guide/faq/car-loan/car-loan.component';
import { GeneralComponent } from './views/pre-owned car guide/faq/general/general.component';
import { InspectionComponent } from './views/pre-owned car guide/inspection/inspection.component';
import { TestDriveComponent } from './views/pre-owned car guide/test-drive/test-drive.component';
import { TipsForBuyingComponent } from './views/pre-owned car guide/tips-for-buying/tips-for-buying.component';

const routes: Routes = [
  { path:'', component:HomeComponent },
  { path:'company-profile', component:CompanyProfileComponent},
  { path:'showrooms', component:ShowroomsComponent},
  { path:'buy-cars', component:BuyCarsComponent},
  { path:'car-info/:id', component:CarInfoComponent},
  { path:'sell-cars', component:SellCarsComponent} ,
  { path:'current-offers', component:CurrentOffersComponent},
  { path:'compare', component:CompareComponent},
  { path:'tipsforbuying', component:TipsForBuyingComponent},
  { path:'inspection', component:InspectionComponent},
  { path:'test-drive', component:TestDriveComponent},
  { path:'close-the-deal', component:CloseDealComponent},
  { path:'general', component:GeneralComponent},
  { path:'car-loan', component:CarLoanComponent},
  { path:'inhouse-finance', component:InHouseFinanceComponent},
  { path:'banks', component:BanksComponent},
  { path:'islamic-banking', component:IslamicBankingComponent},
  { path:'finance-companies', component:FinanceCompaniesComponent},
  { path:'contact', component:ContactComponent},
  { path:'privacy-policy', component:PrivacyPolicyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

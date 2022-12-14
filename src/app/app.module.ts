import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule} from '@angular/material/slider';
import { MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {NgxPaginationModule} from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatDividerModule} from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatRadioModule} from '@angular/material/radio';

import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { ContactComponent } from './views/contact/contact.component';
import { CompanyProfileComponent } from './views/about/company-profile/company-profile.component';
import { ShowroomsComponent } from './views/about/showrooms/showrooms.component';
import { EmiCalculatorComponent } from './views/emi-calculator/emi-calculator.component';
import { TipsForBuyingComponent } from './views/pre-owned car guide/tips-for-buying/tips-for-buying.component';
import { InspectionComponent } from './views/pre-owned car guide/inspection/inspection.component';
import { TestDriveComponent } from './views/pre-owned car guide/test-drive/test-drive.component';
import { CloseDealComponent } from './views/pre-owned car guide/close-deal/close-deal.component';
import { GeneralComponent } from './views/pre-owned car guide/faq/general/general.component';
import { CarLoanComponent } from './views/pre-owned car guide/faq/car-loan/car-loan.component';
import { InHouseFinanceComponent } from './views/finance/in-house-finance/in-house-finance.component';
import { BanksComponent } from './views/finance/banks/banks.component';
import { IslamicBankingComponent } from './views/finance/islamic-banking/islamic-banking.component';
import { FinanceCompaniesComponent } from './views/finance/finance-companies/finance-companies.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { PrivacyPolicyComponent } from './layout/privacy-policy/privacy-policy.component';
import { BuyCarsComponent } from './views/buy-sell-cars/buy-cars/buy-cars.component';
import { SellCarsComponent } from './views/buy-sell-cars/sell-cars/sell-cars.component';
import { CurrentOffersComponent } from './views/buy-sell-cars/current-offers/current-offers.component';
import { CompareComponent } from './views/compare/compare.component';
import { CarInfoComponent } from './views/buy-sell-cars/car-info/car-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    CompanyProfileComponent,
    ShowroomsComponent,
    EmiCalculatorComponent,
    TipsForBuyingComponent,
    InspectionComponent,
    TestDriveComponent,
    CloseDealComponent,
    GeneralComponent,
    CarLoanComponent,
    InHouseFinanceComponent,
    BanksComponent,
    IslamicBankingComponent,
    FinanceCompaniesComponent,
    NavbarComponent,
    PrivacyPolicyComponent,
    BuyCarsComponent,
    SellCarsComponent,
    CurrentOffersComponent,
    CompareComponent,
    CarInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatSelectModule,
    FormsModule,
    NgxSliderModule,
    MatCheckboxModule,
    NgxPaginationModule,
    HttpClientModule,
    MatDividerModule,
    CdkAccordionModule,
    MatRadioModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

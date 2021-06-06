import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SiteComponent } from './components/site/site.component';
import { AdminViewComponent } from './components/admin-view/admin-view.component';
import { CompanyViewComponent } from './components/company-view/company-view.component';
import { CustomerViewComponent } from './components/customer-view/customer-view.component';
import { CouponComponent } from './components/coupon/coupon.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { CouponsListComponent } from './components/coupons-list/coupons-list.component';
import { CartComponent } from './components/cart/cart.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { EmptyViewComponent } from './components/empty-view/empty-view.component';
import { AddCouponComponent } from './components/add-coupon/add-coupon.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ThumbnailComponent,
    LoginComponent,
    HomeComponent,
    SiteComponent,
    AdminViewComponent,
    CompanyViewComponent,
    CustomerViewComponent,
    CouponComponent,
    CompaniesComponent,
    CouponsListComponent,
    CartComponent,
    CustomerListComponent,
    EmptyViewComponent,
    AddCouponComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

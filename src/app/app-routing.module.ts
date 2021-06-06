import { Customer } from 'src/app/models/customer';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { CouponComponent } from './components/coupon/coupon.component';
import { CouponsListComponent } from './components/coupons-list/coupons-list.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SiteComponent } from './components/site/site.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { AddCouponComponent } from './components/add-coupon/add-coupon.component';

  // {path: "products", component: ProductsComponent},
  // {path: "delete-product", component: DeleteProductComponent},
  // {path: "about", component: AboutComponent},
const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "site", component: SiteComponent},
  {path: "coupon-details/:id", component: CouponComponent},
  {path: "companies", component: CompaniesComponent},
  {path: "customers", component: CustomerListComponent},
  {path: "cart", component: CartComponent},
  {path: "my-coupons-list", component: CouponsListComponent},
  {path: "add-product", component: AddCouponComponent},
  {path: "login", component: LoginComponent},
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "**", redirectTo: "/home", pathMatch: "full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

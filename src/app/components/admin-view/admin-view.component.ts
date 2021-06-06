import { Component, OnInit, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Company } from 'src/app/models/company';
import { Coupon } from 'src/app/models/coupon';
import { Customer } from 'src/app/models/customer';
import { CartService } from 'src/app/services/cart.service';
import { CompaniesService } from 'src/app/services/companies.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {
  public isCompanyView = true;
  public isCustomerView = false;
  public isCouponView = false;
  public isCartView = false;

  @Output()
  public coupons: Coupon[] = [];
  @Output()
  public customers: Customer[] = [];
  @Output()
  public companies: Company[] = [];

  constructor(private cartService: CartService, private productService: ProductsService, private title: Title, private companiesService: CompaniesService) { }

  ngOnInit(): void {
    this.title.setTitle("Companies Page");
    this.getAllCouponAsAdmin();
    this.getAllCompaniesAsAdmin();
    this.getAllCustomersAsAdmin();
  }
  
  // public search(): void{
  //   this.productService.search().subscribe(coupons => {
  //     this.coupons = coupons;
  //   },
  //     err => alert(err.message));
  // }

  public getAllCouponAsAdmin(): void {
    this.productService.getAllCouponsAsAdmin().subscribe(coupons => {
      this.coupons = coupons;
    },
      err => alert(err.message));
  }

  public getAllCompaniesAsAdmin(): void {
    this.productService.getAllCompaniesAsAdmin().subscribe(companies => {
      this.companies = companies;
    },
      err => alert(err.message));
  }

  public getAllCustomersAsAdmin(): void {
    this.productService.getAllCustomersAsAdmin().subscribe(customers => {
      this.customers = customers;
    },
      err => alert(err.message));
  }

  public addToCart(coupon: Coupon): void {
    this.cartService.saveCoupons(coupon);
  }

  public addCustomer(customer: Customer): void {
    this.productService.addCustomerAsAdmin(customer).subscribe(()=> {}, err => alert(err.message));
  }

  public addCompany(company: Company): void {
    this.productService.addCustomerAsAdmin(company).subscribe(()=> {}, err => alert(err.message));
  }

  public addCoupon(coupon: Coupon): void {
    this.productService.addCustomerAsAdmin(coupon).subscribe(()=> {}, err => alert(err.message));
  }

  public isCouponsSelected(): void {
    this.isCouponView = true;
    this.isCustomerView = false;
    this.isCompanyView = false;
    this.isCartView = false
  }

  public isCustomersSelected(): void {
    this.isCouponView = false;
    this.isCustomerView = true;
    this.isCompanyView = false;
    this.isCartView = false
  }

  public isCompaniesSelected(): void {
    this.isCouponView = false;
    this.isCustomerView = false;
    this.isCompanyView = true;
    this.isCartView = false
  }

  public isCartSelected(): void {
    this.isCouponView = false;
    this.isCustomerView = false;
    this.isCompanyView = false;
    this.isCartView = true;
  }
}

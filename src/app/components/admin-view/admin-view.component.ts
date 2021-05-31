import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  public companies: Company[] = [];
  public coupons: Coupon[] = [];
  public customers: Customer[] = [];

  @Output()
  public couponClicked: EventEmitter<Coupon> = new EventEmitter();

  constructor(private cartService: CartService, private productService: ProductsService, private title: Title, private companiesService: CompaniesService) { }

  ngOnInit(): void {
    this.title.setTitle("Companies Page");

    // Initial Companies table
    this.companiesService.getAllCompanies().subscribe(companies => {
      this.companies = companies;
    },
      err => alert(err.message));
    // Initial Coupons table
    this.productService.getAllCoupons().subscribe(coupons => {
      this.coupons = coupons;
    },
      err => alert(err.message));
    // Initial Customers table
    this.productService.getAllCustomers().subscribe(customers => {
      this.customers = customers;
    },
      err => alert(err.message));
  }

  public addToCart(coupon: Coupon): void {
    this.cartService.saveCoupons(coupon);
  }
}

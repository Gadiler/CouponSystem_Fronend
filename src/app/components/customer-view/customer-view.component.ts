import { Component, Input, OnInit, Output } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {
  public isCartView = false;
  public isCouponView = false;
  public isHomeView = true;

  @Output()
  public coupons: Coupon[] = [];
  @Output()
  public homePageCoupons: Coupon[] = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getAllCouponAsCustomer();
    this.getAllCouponForHomePage();
  }

  public getAllCouponAsCustomer(): void {
    this.productService.getAllCouponAsCustomer().subscribe(coupons => {
      this.coupons = coupons;
    },
      err => alert(err.message));
  }

  public getAllCouponForHomePage(): void {
    this.productService.getAllCouponForHomePage().subscribe(coupons => {
      this.homePageCoupons = coupons;
    },
      err => alert(err.message));
  }

  public isCartSelected(): void {
    this.isCartView = true;
    this.isCouponView = false;
    this.isHomeView = false
  }

  public isHomeSelected(): void {
    this.isCartView = false;
    this.isCouponView = false;
    this.isHomeView = true;
  }

  public isCouponSelected(): void {
    this.isCartView = false;
    this.isCouponView = true;
    this.isHomeView = false
  }

}

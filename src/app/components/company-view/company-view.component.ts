import { ProductsService } from 'src/app/services/products.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Coupon } from 'src/app/models/coupon';
import { Title } from '@angular/platform-browser';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-company-view',
  templateUrl: './company-view.component.html',
  styleUrls: ['./company-view.component.css']
})
export class CompanyViewComponent implements OnInit {
  @Output()
  public coupons: Coupon[] = [];
  @Output()
  public customers: Customer[] = [];
  
  public isCustomerView = false;
  public isCouponView = true;
  public isAddCouponView = false;
  constructor(private title: Title, private productService: ProductsService, private authService: AuthService) { this.title.setTitle("Company's Products Page") }

  ngOnInit(): void {
    this.title.setTitle("Company's Page")
    this.getAllCouponsAsCompany();
    this.getAllCustomersAsCompany();
  }

  public getAllCustomersAsCompany(): void {
    this.productService.getAllCustomersAsCompany().subscribe(
      (customers) => { this.customers = customers },
      err => { alert(err.message); }
    );
  }

  public getAllCouponsAsCompany(): void {
    this.productService.getAllCouponsAsCompany().subscribe(
      (coupons) => { this.coupons = coupons },
      err => { alert(err.message); }
    );
  }

  public isCouponsSelected(): void {
    this.isCouponView = true;
    this.isCustomerView = false;
    this.isAddCouponView = false;
  }

  public isCustomersSelected(): void {
    this.isCouponView = false;
    this.isCustomerView = true;
    this.isAddCouponView = false;
    this.getAllCustomersAsCompany();
  }

  public isAddCouponSelected(): void {
    this.isCouponView = false;
    this.isCustomerView = false;
    this.isAddCouponView = true;
  }

  // public deleteCoupon(couponId: number): void {
  //   if (confirm("R U Sure?!")) {
  //     this.productService.deleteCouponAsAdmin(couponId).subscribe(() => {
  //       this.coupons = this.coupons?.filter(x => x.id !== couponId);
  //       alert("Success deleting coupon " + couponId)
  //     },
  //       err => { alert("Error: " + err) })
  //   }
  // }

  public addCoupon(coupon: Coupon): void {
    this.productService.addCouponAsAdmin(coupon).subscribe(() => {
      alert("Success ");
    }, err => alert(err.message));
  }



}

import { ProductsService } from 'src/app/services/products.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Coupon } from 'src/app/models/coupon';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-company-view',
  templateUrl: './company-view.component.html',
  styleUrls: ['./company-view.component.css']
})
export class CompanyViewComponent implements OnInit {
  public coupons?: Coupon[];
  constructor(private title: Title, private productService: ProductsService, private authService: AuthService) {this.title.setTitle("Company's Products Page") }

  ngOnInit(): void {
    this.title.setTitle("Company's Page")
    this.productService.getAllCouponsFromLastLoggedCompany().subscribe(coupons => {
      this.coupons = coupons;
    },
      err => alert(err.message));
  }

  public deleteCoupon(couponId: number): void {
    if (confirm("R U Sure?!")) {
      this.productService.deleteCoupon(couponId).subscribe(() => { alert("Success deleting coupon " + couponId) },
        err => { alert("Error: " + err) })
    }
  }

  public addCoupon(coupon: Coupon): void {
    this.productService.addCoupon(coupon).subscribe(() => {
      alert("Success ");
    }, err => alert(err.message));
  }



}

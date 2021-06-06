import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Company } from 'src/app/models/company';
import { Coupon } from 'src/app/models/coupon';
import { Customer } from 'src/app/models/customer';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-coupons-list',
  templateUrl: './coupons-list.component.html',
  styleUrls: ['./coupons-list.component.css']
})
export class CouponsListComponent implements OnInit {
  @Input()
  public coupons: Coupon[] = [];
  @Input()
  public isAdmin = false;
  @Input()
  public isCompany = false;

  constructor(private title: Title, private cartService: CartService, private productService: ProductsService) {
    this.title.setTitle("Products Page");
  }

  ngOnInit(): void { }

  public addToCart(coupon: Coupon): void {
    this.cartService.saveCoupons(coupon);
    alert("Success to add coupon to cart");
  }

  public updateCouponAsAdmin(coupon: Coupon):void{
    this.productService.updateCouponAsAdmin(coupon).subscribe(()=> {this.coupons = this.coupons?.filter(x => x.id !== coupon.id);}, err => alert(err.message));
  }

  // public deleteCouponAsAdmin(coupon: Coupon):void{
  //   this.productService.deleteCouponAsAdmin(coupon.id?coupon.id:0).subscribe(()=> {this.coupons = this.coupons?.filter(x => x.id !== coupon.id);}, err => alert(err.message));
  // }  

  public deleteCouponAsCompany(coupon: Coupon): void {
    this.productService.deleteCouponAsCompany(coupon.id?coupon.id:0).subscribe(() => { this.coupons = this.coupons?.filter(x => x.id !== coupon.id); }, err => alert(err.message));
  }

  public updateCouponAsCompany(coupon: Coupon): void {
    this.productService.updateCouponAsCompany(coupon).subscribe(() => {this.coupons = this.coupons?.filter(x => x.id !== coupon.id);}, err => alert(err.message));
  }
}

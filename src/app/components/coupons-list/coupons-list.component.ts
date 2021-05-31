import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Coupon } from 'src/app/models/coupon';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-coupons-list',
  templateUrl: './coupons-list.component.html',
  styleUrls: ['./coupons-list.component.css']
})
export class CouponsListComponent implements OnInit {

  public coupons: Coupon[] = [];

  @Output()
  public couponClicked: EventEmitter<Coupon> = new EventEmitter();

  constructor(private title: Title, private productService: ProductsService, private cartService: CartService) { }

  ngOnInit(): void {
    this.title.setTitle("Products Page");
    this.productService.getAllCoupons().subscribe(coupons => {
      this.coupons = coupons;
    },
      err => alert(err.message));
  }

  public addToCart(coupon: Coupon): void {
    this.cartService.saveCoupons(coupon);
  }

}

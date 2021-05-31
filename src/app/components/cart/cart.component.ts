import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Coupon } from 'src/app/models/coupon';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public coupons?: Coupon[] = [];

  constructor(private title: Title, private cartService: CartService) {
    this.title.setTitle("Cart Page");
    // this.coupons = this.cartService.shareCoupons();
  }


  ngOnInit(): void {
    this.coupons = this.cartService.shareCoupons();
    // this.cartService.getCount().subscribe(coupons => {
    //   this.coupons = coupons;
    // },
    // err => alert("Error " + err));
  }

  public removeCoupon(coupon: Coupon): void {
    this.cartService.removeFromCart(coupon);
  }

}

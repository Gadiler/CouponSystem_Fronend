import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Coupon } from 'src/app/models/coupon';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input()
  public coupons?: Coupon[] = [];

  constructor(private title: Title, private cartService: CartService) {
    this.title.setTitle("Cart Page");
  }


  ngOnInit(): void {
    this.coupons = this.cartService.shareCoupons();
  }

  public removeCoupon(coupon: Coupon): void {
    this.cartService.removeFromCart(coupon);
  }

  public purchaseCouponAsCustomer(coupon: Coupon):void{
    this.cartService.purchaseCouponAsCustomer(coupon).subscribe(
      ()=>{ alert("Success to purchase the coupon: " + coupon.id);
      this.coupons = this.coupons?.filter(x => x.id !== coupon.id);}, 
      err=>{ alert("Error: " + err.message)}
    );
  }

}

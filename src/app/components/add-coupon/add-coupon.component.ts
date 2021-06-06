import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { AuthService } from 'src/app/services/auth.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.css']
})
export class AddCouponComponent implements OnInit {
  public coupon = new Coupon();
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
  }

  public addCoupon(): void {
    this.productService.addCouponAsAdmin(this.coupon).subscribe(
      () => { alert("Success to add a coupon!"); },
      (err) => alert(err.message));
  }

}

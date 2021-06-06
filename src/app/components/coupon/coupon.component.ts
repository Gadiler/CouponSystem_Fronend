import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Coupon } from 'src/app/models/coupon';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {
  
  private _coupon?: Coupon;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductsService) { }

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.params.id;
    this.productService.getAllCouponsAsAdmin().subscribe(coupons => {
      this._coupon = coupons.find(p => p.id == id);
    },
      err => alert(err.message));
  }

  get coupon(){
    return this._coupon? this._coupon : new Coupon();
  }

  set coupon(value: Coupon){
    this._coupon = value;
  }

}

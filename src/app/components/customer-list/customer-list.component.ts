import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Customer } from 'src/app/models/customer';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {
  @Input()
  public customers: Customer[] = [];
  @Input()
  public isAdmin = false;

  constructor(private title: Title, private productService: ProductsService) {
    this.title.setTitle("Customers List")
  }

  
  public updateCustomerAsAdmin(customer: Customer):void{
    this.productService.updateCouponAsAdmin(customer).subscribe(()=> {}, err => alert(err.message));
  }

  public deleteCustomerAsAdmin(customer: Customer):void{
    this.productService.deleteCustomerAsAdmin(customer).subscribe(()=> {
      this.customers = this.customers?.filter(x => x.id !== customer.id);}, err => alert(err.message));
  }
}

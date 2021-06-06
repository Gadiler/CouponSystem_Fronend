import { ProductsService } from 'src/app/services/products.service';
import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Company } from 'src/app/models/company';
import { CompaniesService } from 'src/app/services/companies.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  @Input()
  public companies: Company[] = [];
  @Input()
  public isAdmin = false;

  constructor(private title: Title, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.title.setTitle("Companies Page");
  }

  public updateCompanyAsAdmin(company: Company): void {
    this.productsService.updateCompanyAsAdmin(company).subscribe(() => {this.companies = this.companies?.filter(x => x.id !== company.id);}, err => alert(err.message));
  }

  public deleteCompanyAsAdmin(company: Company): void {
    this.productsService.deleteCompanyAsAdmin(company).subscribe(() => { this.companies = this.companies?.filter(x => x.id !== company.id); }, err => alert(err.message));
  }

  // public deleteCompanyAsCompany(company: Company): void {
  //   this.productsService.deleteCompanyAsCompany(company).subscribe(() => { this.companies = this.companies?.filter(x => x.id !== company.id); }, err => alert(err.message));
  // }

  // public updateCompanyAsCompany(company: Company): void {
  //   this.productsService.updateCompanyAsCompany(company).subscribe(() => {this.companies = this.companies?.filter(x => x.id !== company.id);}, err => alert(err.message));
  // }

}

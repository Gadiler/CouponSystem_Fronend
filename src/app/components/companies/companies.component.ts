import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Company } from 'src/app/models/company';
import { CompaniesService } from 'src/app/services/companies.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  public companies: Company[] = [];
  
  constructor(private title: Title, private companiesService: CompaniesService) { }

  ngOnInit(): void {
    this.title.setTitle("Companies Page");
    this.companiesService.getAllCompanies().subscribe(companies => {
      this.companies = companies;
    },
      err => alert(err.message));
  }

}

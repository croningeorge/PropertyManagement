import { Component, OnInit } from '@angular/core';
import { ICompany } from '../../core/services/companyservice/company.module';
import { CompanyService } from '../../core/services/companyservice/companyservice.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  
  public company: ICompany[];
  indLoading: boolean = false;
  listFilter: string;
  msg: string;

  constructor(
    private data: CompanyService,
    private toasterService: ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.data.getcompanyList()
      .subscribe(data =>
        this.company = data
      )
  }


  getCompany(company: ICompany): void {
    window.localStorage.removeItem("companyId");
    window.localStorage.setItem("companyId", company.companyId.toString());
    debugger;
    this.router.navigate(['/company/edit-company']);
  };


  deleteCompany(company: ICompany) {
    debugger;
    if (confirm('Are you sure to delete this record ?') == true) {
      this.data.deletePayment(company.companyId)
        .subscribe(x => {
          this.company = this.company.filter(u => u !== company);
        })
        this.toasterService.error('Record removed Successfully!', 'Payment Gateway');
    }
    
  }

  detailsCompany(company: ICompany):void{
    window.localStorage.removeItem("companyId");
    window.localStorage.setItem("companyId", company.companyId.toString());
    debugger;
    this.router.navigate(['/company/details-company']);
  }

   /**null records alert passing */
   LoadOutlets(): void {
    this.indLoading = true;
    this.data.getPaymentList().subscribe(companys => {
      this.company = companys;
      this.indLoading = false;
    }, error => (this.msg = <any>error));
  }
  /**Filtering */
  criteriaChange(value: string): void {
    if (value !== "[object Event]") {
      this.listFilter = value;
    }
  }
} 

import { Component, OnInit } from '@angular/core';
import { ICompany } from '../../../core/services/companyservice/company.module';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from '../../../core/services/companyservice/companyservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details-company',
  templateUrl: './details-company.component.html',
  styleUrls: ['./details-company.component.scss']
})
export class DetailsCompanyComponent implements OnInit {

  company: ICompany;
  detailsForm: FormGroup;
  
  constructor(
    private router: Router,
    private companyService: CompanyService,
    private toasterService: ToastrService) { }

  ngOnInit() {
    debugger;
    let userId = window.localStorage.getItem("companyId");
    if (!userId) {
      alert("Invalid action.")
      this.router.navigate(['/company']);
      return;
    }
    this.companyService.getPaymentById(+userId)
    .subscribe(data=>{
      this.companyService=data
    });
  }
    
}

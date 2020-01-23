import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCompanyComponent } from './add-company/add-company.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import { DetailsCompanyComponent } from './details-company/details-company.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyService } from '../../core/services/companyservice/companyservice.service';
import { CompanyComponent } from './company.component';



@NgModule({
  declarations: [
    CompanyComponent,
    AddCompanyComponent, 
    EditCompanyComponent, 
    DetailsCompanyComponent
  ],

  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CompanyRoutingModule,
  ],
  
  providers: [
    CompanyService
  ]
})
export class CompanyModule { }

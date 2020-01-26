import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CountryComponent } from './country.component';
import { EditCountryComponent } from './edit-country/edit-country.component';
import { AddCountryComponent } from './add-country/add-country.component';
import { DetailCountryComponent } from './detail-country/detail-country.component';
import { CountryRoutingModule } from './country-routing.module';
import { CountryserviceService } from '../../core/services/countryservice/countryservice.service';



@NgModule({
  declarations: [

    CountryComponent,
    EditCountryComponent,
    AddCountryComponent,
    DetailCountryComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CountryRoutingModule
  ],
  providers: [
    CountryserviceService
  ]
})
export class CountryModule { }

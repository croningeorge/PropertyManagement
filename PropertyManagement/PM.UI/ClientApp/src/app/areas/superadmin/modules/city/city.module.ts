import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SubscriptionplanService } from '../../core/services/subscriptionplanservice/subscriptionplan.service';

import { CityserviceService } from '../../core/services/cityservice/cityservice.service';
import { CityComponent } from './city.component';
import { AddCityComponent } from './add-city/add-city.component';
import { EditCityComponent } from './edit-city/edit-city.component';
import { DetailCityComponent } from './detail-city/detail-city.component';
import { CityRoutingModule } from './city-routing.module';



@NgModule({
  declarations: [
    CityComponent,
    AddCityComponent,
    EditCityComponent,
    DetailCityComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CityRoutingModule
  ],
  providers: [
    CityserviceService
  ]
})
export class CityModule { }

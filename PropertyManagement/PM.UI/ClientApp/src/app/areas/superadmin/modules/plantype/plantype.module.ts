import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PlantypeComponent } from './plantype.component';
import { AddPlantypeComponent } from './add-plantype/add-plantype.component';
import { EditPlantypeComponent } from './edit-plantype/edit-plantype.component';
import { DetailPlantypeComponent } from './detail-plantype/detail-plantype.component';
import { PlantypeRoutingModule } from './plantype-routing.module';
import { PlantypeserviceService } from '../../core/services/plantypeservice/plantypeservice.service';



@NgModule({
  declarations: [
   PlantypeComponent,
   AddPlantypeComponent,
   EditPlantypeComponent,
   DetailPlantypeComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    PlantypeRoutingModule
  ],
  providers: [
    PlantypeserviceService
  ]
})
export class PlanTypeModule { }

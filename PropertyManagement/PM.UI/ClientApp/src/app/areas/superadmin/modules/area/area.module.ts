import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AreaComponent } from './area.component';
import { AddAreaComponent } from './add-area/add-area.component';
import { EditAreaComponent } from './edit-area/edit-area.component';
import { DetailAreaComponent } from './detail-area/detail-area.component';
import { AreaRoutingModule } from './area-routing.module';
import { AreaserviceService } from '../../core/services/areaservice/areaservice.service';



@NgModule({
  declarations: [
  AreaComponent,
  AddAreaComponent,
  EditAreaComponent,
  DetailAreaComponent  
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AreaRoutingModule
  ],
  providers: [
    AreaserviceService
  ]
})
export class AreaModule { }

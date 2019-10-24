import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSubscriptionComponent } from './add-subscription/add-subscription.component';
import { EditSubscriptionComponent } from './edit-subscription/edit-subscription.component';
import { DetailsSubscriptionComponent } from './details-subscription/details-subscription.component';
import { SubscriptionPlanRoutingModule } from './subscriptionplan-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SubscriptionplanService } from '../../core/services/subscriptionplanservice/subscriptionplan.service';
import { SubscriptionplanComponent } from './subscriptionplan.component';



@NgModule({
  declarations: [
    SubscriptionplanComponent,
    AddSubscriptionComponent, 
    EditSubscriptionComponent, 
    DetailsSubscriptionComponent],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SubscriptionPlanRoutingModule
  ],
  providers: [
    SubscriptionplanService
  ]
})
export class SubscriptionplanModule { }

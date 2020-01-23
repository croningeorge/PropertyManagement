import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentgatewayComponent } from './paymentgateway.component';
import { PaymentGatewayRoutingModule } from './paymentgateway-routing.module';


import { PaymentgatewayService } from '../../core/services/paymentgatewayservice/paymentgateway.service';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { EditPaymentComponent } from './edit-payment/edit-payment.component';
import { DetailsPaymentComponent } from './details-payment/details-payment.component';




@NgModule({
  declarations: [
    PaymentgatewayComponent,
    AddPaymentComponent,
    EditPaymentComponent,
    DetailsPaymentComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    PaymentGatewayRoutingModule,
  ],
  providers: [
    PaymentgatewayService
  ]
})
export class PaymentgatewayModule { }

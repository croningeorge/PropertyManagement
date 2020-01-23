import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentgatewayComponent } from './paymentgateway.component';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { EditPaymentComponent } from './edit-payment/edit-payment.component';
import { DetailsPaymentComponent } from './details-payment/details-payment.component';



const routes: Routes = [
  {
    path: '',
    data: { title: 'PaymentGateway'},
    children: [
      {
        path: '',
        component: PaymentgatewayComponent,
      },
      {
        path: "add-payment",
        component: AddPaymentComponent
      },
      {
        path: "edit-payment",
        component: EditPaymentComponent
      },
      {
        path: "details-payment",
        component: DetailsPaymentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentGatewayRoutingModule { }




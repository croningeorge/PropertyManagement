import { Component, OnInit } from '@angular/core';
import { IPaymentgateways } from '../../core/services/paymentgatewayservice/paymentgateway.model';
import { PaymentgatewayService } from '../../core/services/paymentgatewayservice/paymentgateway.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paymentgateway',
  templateUrl: './paymentgateway.component.html',
  styleUrls: ['./paymentgateway.component.scss']
})
export class PaymentgatewayComponent implements OnInit {

  public payment: IPaymentgateways[];

  constructor(
    private data: PaymentgatewayService,
    private toasterService: ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.data.getPaymentList()
      .subscribe(data =>
        this.payment = data
      )
  }


  getPayment(payment: IPaymentgateways): void {
    window.localStorage.removeItem("paymentId");
    window.localStorage.setItem("paymentId", payment.paymentId.toString());
    debugger;
    this.router.navigate(['/gateways/edit-payment']);
  };


  deletePayment(payments: IPaymentgateways) {
    debugger;
    if (confirm('Are you sure to delete this record ?') == true) {
      this.data.deletePayment(payments.paymentId)
        .subscribe(x => {
          this.payment = this.payment.filter(u => u !== payments);
        })
        this.toasterService.error('Record removed Successfully!', 'Payment Gateway');
    }
    
  }

  detailsPayment(payment: IPaymentgateways):void{
    window.localStorage.removeItem("paymentId");
    window.localStorage.setItem("paymentId", payment.paymentId.toString());
    debugger;
    this.router.navigate(['/gateways/details-payment']);
  }
} 

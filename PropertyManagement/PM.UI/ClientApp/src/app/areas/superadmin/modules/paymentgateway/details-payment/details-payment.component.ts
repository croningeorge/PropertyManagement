import { Component, OnInit } from '@angular/core';
import { IPaymentgateways } from '../../../core/services/paymentgatewayservice/paymentgateway.model';
import { PaymentgatewayService } from '../../../core/services/paymentgatewayservice/paymentgateway.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-details-payment',
  templateUrl: './details-payment.component.html',
  styleUrls: ['./details-payment.component.scss']
})
export class DetailsPaymentComponent implements OnInit {

  payment: IPaymentgateways;
  detailsForm: FormGroup;
  
  constructor(
    private router: Router,
    private paymentService: PaymentgatewayService,
    private toasterService: ToastrService) { }

  ngOnInit() {
    debugger;
    let userId = window.localStorage.getItem("paymentId");
    if (!userId) {
      alert("Invalid action.")
      this.router.navigate(['/gateways']);
      return;
    }
    this.paymentService.getPaymentById(+userId)
    .subscribe(data=>{
      this.payment=data
    });
  }
    
}
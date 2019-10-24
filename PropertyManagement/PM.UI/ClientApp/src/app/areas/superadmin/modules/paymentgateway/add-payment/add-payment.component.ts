import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IPaymentgateways } from '../../../core/services/paymentgatewayservice/paymentgateway.model';
import { PaymentgatewayService } from '../../../core/services/paymentgatewayservice/paymentgateway.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.scss']
})
export class AddPaymentComponent implements OnInit {

  public paymentForm: FormGroup;
  public payment: IPaymentgateways[];


  constructor(
    private formBuilder: FormBuilder,
    private paymentService: PaymentgatewayService,
    private toasterService: ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.paymentForm = this.formBuilder.group({
      bankName: ["", Validators.required],
      appID: ["", Validators.required],
      secretCode: ["", Validators.required],
      redirectURL: ["", Validators.required],
      expiredate: ["", Validators.required],
      isActive: ["", Validators.required]
    });
  }

  postPayment(payments: IPaymentgateways) {
    this.paymentService.postPayment(payments)
      .subscribe(x => {
      });
    this.paymentService.getPaymentList();
    this.router.navigate(['/gateways']);
    this.toasterService.success("New Record Added SuccessFully", "Payment Gateway");

  }

}

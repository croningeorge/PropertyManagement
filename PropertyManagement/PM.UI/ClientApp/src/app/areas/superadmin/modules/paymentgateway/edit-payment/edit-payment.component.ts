import { Component, OnInit } from '@angular/core';
import { IPaymentgateways } from '../../../core/services/paymentgatewayservice/paymentgateway.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PaymentgatewayService } from '../../../core/services/paymentgatewayservice/paymentgateway.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-payment',
  templateUrl: './edit-payment.component.html',
  styleUrls: ['./edit-payment.component.scss']
})
export class EditPaymentComponent implements OnInit {

  payment: IPaymentgateways;
  editForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private paymentService: PaymentgatewayService,
    private toasterService: ToastrService) { }

  ngOnInit() {
    debugger;
    let userId = window.localStorage.getItem("paymentId");
    if (!userId) {
      alert("Invalid action.")
      this.router.navigate(['/list-payment']);
      return;
    }
    this.editForm = this.formBuilder.group({
      paymentId: [''],
      bankName: ["", Validators.required],
      appID: ["", Validators.required],
      secretCode: ["", Validators.required],
      redirectURL: ["", Validators.required],
      expiredate: ["", Validators.required],
      isActive: ["", Validators.required]
    });
    this.paymentService.getPaymentById(+userId)
      .subscribe((payment: IPaymentgateways) => {
        this.editPayment(payment);
        this.payment = this.payment;
      });
  }
  editPayment(payment: IPaymentgateways) {
    //this.toasterService.info("Record id retrive SuccessFully", "Device Regsiter");
    this.editForm.patchValue({
      paymentId: payment.paymentId,
      bankName: payment.bankName,
      appID: payment.appID,
      secretCode: payment.secretCode,
      redirectURL: payment.redirectURL,
      expiredate: payment.expiredate,
      isActive: payment.isActive
    });
  }


  onSubmit() {
    this.paymentService.update(this.editForm.value)
      .subscribe(
        data => {
        });
    this.paymentService.getPaymentList();
    this.router.navigate(['/gateways']);
    this.toasterService.info('Record Updated Successfully!', 'Payment Gateway');

  }
}


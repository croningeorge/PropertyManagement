import { Component, OnInit } from '@angular/core';
import { ISubscription } from '../../../core/services/subscriptionplanservice/subscripiton.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubscriptionplanService } from '../../../core/services/subscriptionplanservice/subscriptionplan.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-subscription',
  templateUrl: './edit-subscription.component.html',
  styleUrls: ['./edit-subscription.component.scss']
})
export class EditSubscriptionComponent implements OnInit {

  subscription: ISubscription;
  editForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private subscriptionService: SubscriptionplanService,
    private toasterService: ToastrService) { }

  ngOnInit() {
    debugger;
    let userId = window.localStorage.getItem("planId");
    if (!userId) {
      alert("Invalid action.")
      this.router.navigate(['/subscription']);
      return;
    }
    this.editForm = this.formBuilder.group({
      planId:[""],
      planName: ["", Validators.required],
      planType: ["", Validators.required],
      subscriptionStartDate: ["", Validators.required],
      subscriptionEndDate: ["", Validators.required],
      isActive: ["", Validators.required]
    });
    this.subscriptionService.getSubscriptionById(+userId)
      .subscribe((subscription: ISubscription) => {
        this.editSubscription(subscription);
        this.subscription = this.subscription;
      });
  }
  editSubscription(subscription: ISubscription) {
    //this.toasterService.info("Record id retrive SuccessFully", "Device Regsiter");
    this.editForm.patchValue({
      planId: subscription.planId,
      planName: subscription.planName,
      planType: subscription.planType,
      subscriptionStartDate: subscription.subscriptionStartDate,
      subscriptionEndDate: subscription.subscriptionEndDate,
      isActive: subscription.isActive
    });
  }


  onSubmit() {
    this.subscriptionService.update(this.editForm.value)
      .subscribe(
        data => {
        });
    this.subscriptionService.getPaymentList();
    this.router.navigate(['/subscription']);
    this.toasterService.info('Record Updated Successfully!', 'Subscription Plan');

  }
}


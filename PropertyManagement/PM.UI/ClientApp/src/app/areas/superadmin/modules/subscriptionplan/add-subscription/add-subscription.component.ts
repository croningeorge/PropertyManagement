import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ISubscription } from '../../../core/services/subscriptionplanservice/subscripiton.model';
import { SubscriptionplanService } from '../../../core/services/subscriptionplanservice/subscriptionplan.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-subscription',
  templateUrl: './add-subscription.component.html',
  styleUrls: ['./add-subscription.component.scss']
})
export class AddSubscriptionComponent implements OnInit {

  public subscriptionForm: FormGroup;
  public subscription: ISubscription[];


  constructor(
    private formBuilder: FormBuilder,
    private subscriptionService: SubscriptionplanService,
    private toasterService: ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.subscriptionForm = this.formBuilder.group({
      planId:[""],
      planName: ["", Validators.required],
      planType: ["", Validators.required],
      subscriptionStartDate: ["", Validators.required],
      subscriptionEndDate: ["", Validators.required],
      isActive: ["", Validators.required]
    });
  }

  postSubscription(subscription: ISubscription) {
    debugger;
    this.subscriptionService.postSubscription(subscription)
      .subscribe(x => {
      });
    this.subscriptionService.getSubscriptionList();
    this.router.navigate(['/subscription']);
    this.toasterService.success("New Record Added SuccessFully", "Subscription Plan");

  }

}

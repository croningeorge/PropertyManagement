import { Component, OnInit } from '@angular/core';
import { ISubscription } from '../../../core/services/subscriptionplanservice/subscripiton.model';
import { Router } from '@angular/router';
import { SubscriptionplanService } from '../../../core/services/subscriptionplanservice/subscriptionplan.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details-subscription',
  templateUrl: './details-subscription.component.html',
  styleUrls: ['./details-subscription.component.scss']
})
export class DetailsSubscriptionComponent implements OnInit {

  subscription: ISubscription;

  constructor(
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
    this.subscriptionService.getSubscriptionById(+userId)
    .subscribe(data=>{
      this.subscription=data
    });
  }
}
    

import { Component, OnInit } from '@angular/core';
import { ISubscription } from '../../core/services/subscriptionplanservice/subscripiton.model';
import { SubscriptionplanService } from '../../core/services/subscriptionplanservice/subscriptionplan.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscriptionplan',
  templateUrl: './subscriptionplan.component.html',
  styleUrls: ['./subscriptionplan.component.scss']
})
export class SubscriptionplanComponent implements OnInit {

  public subscription: ISubscription[];

  constructor(
    private data: SubscriptionplanService,
    private toasterService: ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.data.getSubscriptionList()
      .subscribe(data =>
        this.subscription = data
      )
  }


  getSubscription(subscription: ISubscription): void {
    window.localStorage.removeItem("planId");
    window.localStorage.setItem("planId", subscription.planId.toString());
    debugger;
    this.router.navigate(['/subscription/edit-subscription']);
  };


  deleteSubscription(subscription: ISubscription) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.data.deleteSubscription(subscription.planId)
        .subscribe(x => {
          this.subscription = this.subscription.filter(u => u !== subscription);
        })
        this.toasterService.error('Record removed Successfully!', 'Subscription Plan');
    }
    
  }

  detailsSubscription(subscription: ISubscription):void{
    debugger;
    window.localStorage.removeItem("planId");
    window.localStorage.setItem("planId", subscription.planId.toString());
    debugger;
    this.router.navigate(['/subscription/details-subscription']);
  }
}

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
  indLoading: boolean = false;
  listFilter: string;
  msg: string;

  constructor(
    private data: SubscriptionplanService,
    private toasterService: ToastrService,
    private router: Router) { }

  ngOnInit() {
    debugger;
    this.data.getSubscriptionList()
      .subscribe(data =>
        this.subscription = data
      )
  }


  getSubscription(subscription: ISubscription): void {
    window.localStorage.removeItem("planId");
    window.localStorage.setItem("planId", subscription.subscriptionPlanId.toString());
    debugger;
    this.router.navigate(['/subscription/edit-subscription']);
  };


  deleteSubscription(subscription: ISubscription) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.data.deleteSubscription(subscription.subscriptionPlanId)
        .subscribe(x => {
          this.subscription = this.subscription.filter(u => u !== subscription);
        })
        this.toasterService.error('Record removed Successfully!', 'Subscription Plan');
    }
    
  }

  detailsSubscription(subscription: ISubscription):void{
    debugger;
    window.localStorage.removeItem("planId");
    window.localStorage.setItem("planId", subscription.subscriptionPlanId.toString());
    debugger;
    this.router.navigate(['/subscription/details-subscription']);
  }

   /**null records alert passing */
   LoadOutlets(): void {
    this.indLoading = true;
    this.data.getSubscriptionList().subscribe(subscriptions => {
      this.subscription = subscriptions;
      this.indLoading = false;
    }, error => (this.msg = <any>error));
  }
  /**Filtering */
  criteriaChange(value: string): void {
    if (value !== "[object Event]") {
      this.listFilter = value;
    }
  }
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscriptionplanComponent } from './subscriptionplan.component';
import { AddSubscriptionComponent } from './add-subscription/add-subscription.component';
import { EditSubscriptionComponent } from './edit-subscription/edit-subscription.component';
import { DetailsSubscriptionComponent } from './details-subscription/details-subscription.component';




const routes: Routes = [
  {
    path: '',
    data: { title: 'SubscriptionPlan'},
    children: [
      {
        path: '',
        component: SubscriptionplanComponent,
      },
      {
        path: "add-subscription",
        component: AddSubscriptionComponent
      },
      {
        path: "edit-subscription",
        component: EditSubscriptionComponent
      },
      {
        path: "details-subscription",
        component: DetailsSubscriptionComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscriptionPlanRoutingModule { }




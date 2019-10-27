import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserrolesComponent } from './userroles.component';





const routes: Routes = [
  {
    path: '',
    data: { title: 'UserRoles'},
    children: [
      {
        path: '',
        component: UserrolesComponent,
      },
      // {
      //   path: "add-subscription",
      //   component: AddSubscriptionComponent
      // },
      // {
      //   path: "edit-subscription",
      //   component: EditSubscriptionComponent
      // },
      // {
      //   path: "details-subscription",
      //   component: DetailsSubscriptionComponent
      // }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRolesRoutingModule { }




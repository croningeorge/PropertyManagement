import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';




const routes: Routes = [
  {
    path: '',
    data: { title: 'Registered Users'},
    children: [
      {
        path: '',
        component: UsersComponent,
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
export class UsersRoutingModule { }




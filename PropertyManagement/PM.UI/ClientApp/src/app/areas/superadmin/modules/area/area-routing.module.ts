import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AreaComponent } from './area.component';
import { AddAreaComponent } from './add-area/add-area.component';
import { EditAreaComponent } from './edit-area/edit-area.component';
import { DetailAreaComponent } from './detail-area/detail-area.component';





const routes: Routes = [
  {
    path: '',
    data: { title: 'Area'},
    children: [
      {
        path: '',
        component: AreaComponent,
      },
      {
        path: "add-area",
        component: AddAreaComponent
      },
      {
        path: "edit-area",
        component: EditAreaComponent
      },
      {
        path: "details-area",
        component: DetailAreaComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreaRoutingModule { }




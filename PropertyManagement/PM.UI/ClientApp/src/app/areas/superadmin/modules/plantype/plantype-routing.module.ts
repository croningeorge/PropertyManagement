import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlantypeComponent } from './plantype.component';
import { AddPlantypeComponent } from './add-plantype/add-plantype.component';
import { EditPlantypeComponent } from './edit-plantype/edit-plantype.component';
import { DetailPlantypeComponent } from './detail-plantype/detail-plantype.component';





const routes: Routes = [
  {
    path: '',
    data: { title: 'Plantype'},
    children: [
      {
        path: '',
        component: PlantypeComponent,
      },
      {
        path: "add-plantype",
        component: AddPlantypeComponent
      },
      {
        path: "edit-plantype",
        component: EditPlantypeComponent
      },
      {
        path: "details-plantype",
        component: DetailPlantypeComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlantypeRoutingModule { }




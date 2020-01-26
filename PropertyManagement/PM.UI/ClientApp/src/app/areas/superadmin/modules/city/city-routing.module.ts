import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityComponent } from './city.component';
import { AddCityComponent } from './add-city/add-city.component';
import { EditCityComponent } from './edit-city/edit-city.component';
import { DetailCityComponent } from './detail-city/detail-city.component';





const routes: Routes = [
  {
    path: '',
    data: { title: 'City'},
    children: [
      {
        path: '',
        component: CityComponent,
      },
      {
        path: "add-city",
        component: AddCityComponent
      },
      {
        path: "edit-city",
        component: EditCityComponent
      },
      {
        path: "details-city",
        component: DetailCityComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CityRoutingModule { }




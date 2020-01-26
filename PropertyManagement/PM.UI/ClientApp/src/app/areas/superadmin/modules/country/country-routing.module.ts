import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryComponent } from './country.component';
import { AddCountryComponent } from './add-country/add-country.component';
import { EditCountryComponent } from './edit-country/edit-country.component';
import { DetailCountryComponent } from './detail-country/detail-country.component';





const routes: Routes = [
  {
    path: '',
    data: { title: 'Country'},
    children: [
      {
        path: '',
        component: CountryComponent,
      },
      {
        path: "add-country",
        component: AddCountryComponent
      },
      {
        path: "edit-country",
        component: EditCountryComponent
      },
      {
        path: "details-country",
        component: DetailCountryComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }




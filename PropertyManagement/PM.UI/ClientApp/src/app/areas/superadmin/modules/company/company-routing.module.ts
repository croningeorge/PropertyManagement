import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './company.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import { DetailsCompanyComponent } from './details-company/details-company.component';




const routes: Routes = [
  {
    path: '',
    data: { title: 'Company'},
    children: [
      {
        path: '',
        component: CompanyComponent,
      },
      {
        path: "add-company",
        component: AddCompanyComponent
      },
      {
        path: "edit-company",
        component: EditCompanyComponent
      },
      {
        path: "details-company",
        component: DetailsCompanyComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }




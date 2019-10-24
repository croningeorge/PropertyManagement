import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LanguageComponent } from './language.component';
import { AddLanguageComponent } from './add-language/add-language.component';
import { EditLanguageComponent } from './edit-language/edit-language.component';
import { DetailsLanguageComponent } from './details-language/details-language.component';




const routes: Routes = [
  {
    path: '',
    data: { title: 'Language'},
    children: [
      {
        path: '',
        component: LanguageComponent,
      },
      {
        path: "add-language",
        component: AddLanguageComponent
      },
      {
        path: "edit-language",
        component: EditLanguageComponent
      },
      {
        path: "details-language",
        component: DetailsLanguageComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LanguageRoutingModule { }




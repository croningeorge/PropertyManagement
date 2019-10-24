import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddLanguageComponent } from './add-language/add-language.component';
import { EditLanguageComponent } from './edit-language/edit-language.component';
import { DetailsLanguageComponent } from './details-language/details-language.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LanguageRoutingModule } from './language-routing.module';
import { LanguageserviceService } from '../../core/services/languageservice/languageservice.service';
import { LanguageComponent } from './language.component';



@NgModule({
  declarations: [
    LanguageComponent,
    AddLanguageComponent, 
    EditLanguageComponent, 
    DetailsLanguageComponent],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    LanguageRoutingModule,
  ],
  providers: [
    LanguageserviceService
  ]
})
export class LanguageModule { }

import { Component, OnInit } from '@angular/core';
import { ILanguage } from '../../../core/services/languageservice/language.model';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LanguageserviceService } from '../../../core/services/languageservice/languageservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details-language',
  templateUrl: './details-language.component.html',
  styleUrls: ['./details-language.component.scss']
})
export class DetailsLanguageComponent implements OnInit {

  language: ILanguage;
  detailsForm: FormGroup;
  
  constructor(
    private router: Router,
    private languageService: LanguageserviceService,
    private toasterService: ToastrService) { }

  ngOnInit() {
    debugger;
    let userId = window.localStorage.getItem("languageId");
    if (!userId) {
      alert("Invalid action.")
      this.router.navigate(['/language']);
      return;
    }
    this.languageService.getLanguageById(+userId)
    .subscribe(data=>{
      this.language=data
    });
  }
}
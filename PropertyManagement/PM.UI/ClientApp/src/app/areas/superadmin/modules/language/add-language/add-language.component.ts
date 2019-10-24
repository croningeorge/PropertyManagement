import { Component, OnInit } from '@angular/core';
import { ILanguage } from '../../../core/services/languageservice/language.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LanguageserviceService } from '../../../core/services/languageservice/languageservice.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-language',
  templateUrl: './add-language.component.html',
  styleUrls: ['./add-language.component.scss']
})
export class AddLanguageComponent implements OnInit {

  public languageForm: FormGroup;
  public language: ILanguage[];


  constructor(
    private formBuilder: FormBuilder,
    private languageService: LanguageserviceService,
    private toasterService: ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.languageForm = this.formBuilder.group({
      languageId: ["", Validators.required],
      languageName: ["", Validators.required],
      isActive: ["", Validators.required]
    });
  }

  postLanguage(language: ILanguage) {
    this.languageService.postLanguage(language)
      .subscribe(x => {
      });
    this.languageService.getLanguageList();
    this.router.navigate(['/language']);
    this.toasterService.success("New Record Added SuccessFully", "Language");

  }

}

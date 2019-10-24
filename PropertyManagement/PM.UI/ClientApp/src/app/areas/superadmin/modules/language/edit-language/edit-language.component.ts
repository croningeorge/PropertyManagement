import { Component, OnInit } from '@angular/core';
import { ILanguage } from '../../../core/services/languageservice/language.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LanguageserviceService } from '../../../core/services/languageservice/languageservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-language',
  templateUrl: './edit-language.component.html',
  styleUrls: ['./edit-language.component.scss']
})
export class EditLanguageComponent implements OnInit {

  language: ILanguage;
  editForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
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
    this.editForm = this.formBuilder.group({
      languageId: [''],
      languageName: ["", Validators.required],
      isActive: ["", Validators.required]
    });
    this.languageService.getLanguageById(+userId)
      .subscribe((language: ILanguage) => {
        this.editLanguage(language);
        this.language = this.language;
      });
  }
  editLanguage(language: ILanguage) {
    //this.toasterService.info("Record id retrive SuccessFully", "Device Regsiter");
    this.editForm.patchValue({
      languageId: language.languageId,
      languageName: language.languageName,
      isActive: language.IsActive
    });
  }


  onSubmit() {
    this.languageService.update(this.editForm.value)
      .subscribe(
        data => {
        });
    this.languageService.getLanguageList();
    this.router.navigate(['/language']);
    this.toasterService.info('Record Updated Successfully!', 'Language');

  }
}


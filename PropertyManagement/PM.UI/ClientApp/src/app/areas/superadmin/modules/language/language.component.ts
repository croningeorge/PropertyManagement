import { Component, OnInit } from '@angular/core';
import { ILanguage } from '../../core/services/languageservice/language.model';
import { LanguageserviceService } from '../../core/services/languageservice/languageservice.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  public language: ILanguage[];

  constructor(
    private data: LanguageserviceService,
    private toasterService: ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.data.getLanguageList()
      .subscribe(data =>
        this.language = data
      )
  }


  getLanguage(language: ILanguage): void {
    window.localStorage.removeItem("languageId");
    window.localStorage.setItem("languageId", language.languageId.toString());
    debugger;
    this.router.navigate(['/language/edit-language']);
  };


  deleteLanguage(languages: ILanguage) {
    debugger;
    if (confirm('Are you sure to delete this record ?') == true) {
      this.data.deletePayment(languages.languageId)
        .subscribe(x => {
          this.language = this.language.filter(u => u !== languages);
        })
        this.toasterService.error('Record removed Successfully!', 'Languages');
    }
    
  }

  detailsLanguage(language: ILanguage):void{
    window.localStorage.removeItem("languageId");
    window.localStorage.setItem("languageId", language.languageId.toString());
    debugger;
    this.router.navigate(['/language/details-language']);
  }
} 


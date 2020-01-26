import { Component, OnInit } from '@angular/core';
import { ICountry } from '../../core/services/countryservice/country.model';
import { CountryserviceService } from '../../core/services/countryservice/countryservice.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  public country: ICountry[];
  indLoading: boolean = false;
  listFilter: string;
  msg: string;

  constructor(
    private data: CountryserviceService,
    private toasterService: ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.data.getCountryList()
      .subscribe(data =>
        this.country = data
      )
  }


  getCountry(country: ICountry): void {
    window.localStorage.removeItem("countryId");
    window.localStorage.setItem("countryId", country.countryId.toString());
    debugger;
    this.router.navigate(['/country/edit-country']);
  };


  deleteCountry(countrys: ICountry) {
    debugger;
    if (confirm('Are you sure to delete this record ?') == true) {
      this.data.deleteCountry(countrys.countryId)
        .subscribe(x => {
          this.country = this.country.filter(u => u !== countrys);
        })
        this.toasterService.error('Record removed Successfully!', 'Payment Gateway');
    }
    
  }

  detailsCountry(country: ICountry):void{
    window.localStorage.removeItem("countryId");
    window.localStorage.setItem("countryId", country.countryId.toString());
    debugger;
    this.router.navigate(['/country/details-country']);
  }

   /**null records alert passing */
   LoadOutlets(): void {
    this.indLoading = true;
    this.data.getCountryList().subscribe(countrys => {
      this.country = countrys;
      this.indLoading = false;
    }, error => (this.msg = <any>error));
  }
  /**Filtering */
  criteriaChange(value: string): void {
    if (value !== "[object Event]") {
      this.listFilter = value;
    }
  }
} 

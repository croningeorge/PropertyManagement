import { Component, OnInit } from '@angular/core';
import { ICity } from '../../core/services/cityservice/city.model';
import { CityserviceService } from '../../core/services/cityservice/cityservice.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  public city: ICity[];
  indLoading: boolean = false;
  listFilter: string;
  msg: string;

  constructor(
    private data: CityserviceService,
    private toasterService: ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.data.getCityList()
      .subscribe(data =>
        this.city = data
      )
  }


  getCity(city: ICity): void {
    window.localStorage.removeItem("cityId");
    window.localStorage.setItem("cityId", city.cityId.toString());
    debugger;
    this.router.navigate(['/city/edit-city']);
  };


  deleteCity(citys: ICity) {
    debugger;
    if (confirm('Are you sure to delete this record ?') == true) {
      this.data.deleteCity(citys.cityId)
        .subscribe(x => {
          this.city = this.city.filter(u => u !== citys);
        })
        this.toasterService.error('Record removed Successfully!', 'Payment Gateway');
    }
    
  }

  detailsCity(city: ICity):void{
    window.localStorage.removeItem("cityId");
    window.localStorage.setItem("cityId", city.cityId.toString());
    debugger;
    this.router.navigate(['/city/details-city']);
  }

   /**null records alert passing */
   LoadOutlets(): void {
    this.indLoading = true;
    this.data.getCityList().subscribe(citys => {
      this.city = citys;
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


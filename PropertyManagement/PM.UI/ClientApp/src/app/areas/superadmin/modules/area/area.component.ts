import { Component, OnInit } from '@angular/core';
import { IArea } from '../../core/services/areaservice/area.model';
import { AreaserviceService } from '../../core/services/areaservice/areaservice.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  public area: IArea[];
  indLoading: boolean = false;
  listFilter: string;
  msg: string;

  constructor(
    private data: AreaserviceService,
    private toasterService: ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.data.getAreaList()
      .subscribe(data =>
        this.area = data
      )
  }


  getArea(area: IArea): void {
    window.localStorage.removeItem("areaId");
    window.localStorage.setItem("areaId", area.areaId.toString());
    debugger;
    this.router.navigate(['/area/edit-area']);
  };


  deleteArea(areas: IArea) {
    debugger;
    if (confirm('Are you sure to delete this record ?') == true) {
      this.data.deleteArea(areas.areaId)
        .subscribe(x => {
          this.area = this.area.filter(u => u !== areas);
        })
        this.toasterService.error('Record removed Successfully!', 'Payment Gateway');
    }
    
  }

  detailsArea(area: IArea):void{
    window.localStorage.removeItem("areaId");
    window.localStorage.setItem("areaId", area.areaId.toString());
    debugger;
    this.router.navigate(['/area/details-area']);
  }

   /**null records alert passing */
   LoadOutlets(): void {
    this.indLoading = true;
    this.data.getAreaList().subscribe(areas => {
      this.area = areas;
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

import { Component, OnInit } from '@angular/core';
import { IUsers } from '../../core/services/userservice/usermodel';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UsersService } from '../../core/services/userservice/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users: IUsers[];
  indLoading: boolean = false;
  listFilter: string;
  msg: string;

  constructor(
    private data: UsersService,
    private toasterService: ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.data.getUsersList()
      .subscribe(data =>
        this.users = data
      )
  }


  // getUsers(user: IUsers): void {
  //   window.localStorage.removeItem("paymentId");
  //   window.localStorage.setItem("paymentId", user.paymentId.toString());
  //   debugger;
  //   this.router.navigate(['/gateways/edit-payment']);
  // };


  // deletePayment(payments: IPaymentgateways) {
  //   debugger;
  //   if (confirm('Are you sure to delete this record ?') == true) {
  //     this.data.deletePayment(payments.paymentId)
  //       .subscribe(x => {
  //         this.payment = this.payment.filter(u => u !== payments);
  //       })
  //       this.toasterService.error('Record removed Successfully!', 'Payment Gateway');
  //   }
    
  // }

  // detailsPayment(payment: IPaymentgateways):void{
  //   window.localStorage.removeItem("paymentId");
  //   window.localStorage.setItem("paymentId", payment.paymentId.toString());
  //   debugger;
  //   this.router.navigate(['/gateways/details-payment']);
  // }

   /**null records alert passing */
   LoadOutlets(): void {
    this.indLoading = true;
    this.data.getUsersList().subscribe(user => {
      this.users = user;
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

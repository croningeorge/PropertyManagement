import { Component } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent { 
  
  formModel = {
  UserName: '',
  Password: ''
}
constructor(
  private service: UserService, 
  private router: Router, 
  private toastr: ToastrService) { }

ngOnInit() {
  if (localStorage.getItem('token') != null)
    this.router.navigateByUrl('/home');
}

onSubmit(form: NgForm) {
  this.service.login(form.value).subscribe(
    (res: any) => {
      localStorage.setItem('token', res.token);
      this.router.navigateByUrl('/home');
    },
    err => {
      if (err.status == 400)
        this.toastr.error('Incorrect username or password.', 'Authentication failed.');
      else
        console.log(err);
    }
  );
}

}




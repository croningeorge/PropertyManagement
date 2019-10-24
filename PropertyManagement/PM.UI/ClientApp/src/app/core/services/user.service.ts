import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { Router } from "@angular/router";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class UserService {

  constructor(
    private fb: FormBuilder,
    private http: HttpClient) { }

  
    formModel = this.fb.group({
      UserName:  ['', Validators.required],
      Email:     ['', Validators.email],
      FullName:  [''],
      Passwords: this.fb.group({
        Password: ['', [Validators.required, Validators.minLength(4)]],
        ConfirmPassword: ['', Validators.required]
      }, { validator: this.comparePasswords })
  
    });
  
    comparePasswords(fb: FormGroup) {
      let confirmPswrdCtrl = fb.get('ConfirmPassword');
      //passwordMismatch
      //confirmPswrdCtrl.errors={passwordMismatch:true}
      if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
        if (fb.get('Password').value != confirmPswrdCtrl.value)
          confirmPswrdCtrl.setErrors({ passwordMismatch: true });
        else
          confirmPswrdCtrl.setErrors(null);
      }
    }
  
    register() {
      var body = {
        UserName: this.formModel.value.UserName,
        Email: this.formModel.value.Email,
        FullName: this.formModel.value.FullName,
        Password: this.formModel.value.Passwords.Password
      };
      return this.http.post( '/api/ApplicationUser/Register', body);
    }
  
  login(formData) {
    debugger;
      return this.http.post('/api/ApplicationUser/Login', formData);
    }
  
    getUserProfile() {
      return this.http.get('/api/UserProfile');
    }

    roleMatch(allowedRoles): boolean {
      var isMatch = false;
      var payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
      var userRole = payLoad.role;
      allowedRoles.forEach(element => {
        if (userRole == element) {
          isMatch = true;
          return false;
        }
      });
      return isMatch;
    }
}




import { Component, OnDestroy, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { navItems } from '../../_nav';
import { Router } from '@angular/router';
import { UserService } from '../../core/services/user.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit  {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;
  userDetails;

  constructor(
    private router: Router,
    private service: UserService,
    @Inject(DOCUMENT) _document?: any) {
      this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
    });
    this.element = _document.body;
    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ['class']
    });
  }
 
   ngOnInit() {
     this.service.getUserProfile().subscribe(
       res => {
         this.userDetails = res;
       },
       err => {
         console.log(err);
       },
     );
   }

  //ngOnDestroy(): void {
  //  this.changes.disconnect();
  //}

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}





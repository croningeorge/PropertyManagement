import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';


import { LoginComponent } from './modules/authentication/login/login.component';
import { AuthGuard } from './core/authguard/auth.guard';
import { RegisterComponent } from './modules/authentication/register/register.component';


export const routes: Routes = [
  {
    path: '', component: LoginComponent, data: { title: 'Login Page' }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },

  {
    path: "",
    component: DefaultLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        loadChildren: () => import('./areas/superadmin/modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'company',
        loadChildren: () => import('./areas/superadmin/modules/company/company.module').then(m => m.CompanyModule)
      },
      {
        path: 'subscription',
        loadChildren: () => import('./areas/superadmin/modules/subscriptionplan/subscriptionplan.module').then(m => m.SubscriptionplanModule)
      },
      {
        path: 'country',
        loadChildren: () => import('./areas/superadmin/modules/country/country.module').then(m => m.CountryModule)
      },
      {
        path: 'city',
        loadChildren: () => import('./areas/superadmin/modules/city/city.module').then(m => m.CityModule)
      },
      {
        path: 'area',
        loadChildren: () => import('./areas/superadmin/modules/area/area.module').then(m => m.AreaModule)
      },
      {
        path: 'plantype',
        loadChildren: () => import('./areas/superadmin/modules/plantype/plantype.module').then(m => m.PlanTypeModule)
      },
      {
        path: 'gateways',
        loadChildren: () => import('./areas/superadmin/modules/paymentgateway/paymentgateway.module').then(m => m.PaymentgatewayModule)
      },
      {
        path: 'language',
        loadChildren: () => import('./areas/superadmin/modules/language/language.module').then(m => m.LanguageModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./areas/superadmin/modules/users/users.module').then(m => m.UsersModule)
      },
      
      {
        path: 'base',
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

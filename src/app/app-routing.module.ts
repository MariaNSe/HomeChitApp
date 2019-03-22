import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './core/guards/auth-guard.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AnonGuardService } from './core/guards/anon-guard.service';
import { LoginTestComponent } from './login-test/login-test.component';


const appRoutes: Routes = [
  {path: 'design', loadChildren: './design/design.module#DesignModule'},

  {path: 'login', component: LoginComponent, canActivate: [AnonGuardService]},
  {path: 'login-test', component: LoginTestComponent, canActivate: [AnonGuardService]},
  {path: 'sign-up', loadChildren: './sign-up/sign-up.module#SignUpModule', canLoad: [AnonGuardService]},

  {path: 'console', loadChildren: './console/console.module#ConsoleModule', canLoad: [AuthGuardService]},
  {path: 'user', loadChildren: './user/user.module#UserModule', canLoad: [AuthGuardService]},
  {path: 'data', loadChildren: './data/data.module#DataModule', canLoad: [AuthGuardService]},
  {path: 'finance', loadChildren: './finance/finance.module#FinanceModule', canLoad: [AuthGuardService]},
  {path: 'assets', loadChildren: './assets/assets.module#AssetsModule', canLoad: [AuthGuardService]},
  {path: 'contacts', loadChildren: './contacts/contacts.module#ContactsModule', canLoad: [AuthGuardService]},
  {path: 'analytics', loadChildren: './analytics/analytics.module#AnalyticsModule', canLoad: [AuthGuardService]},
  {
    path: 'organization',
    loadChildren: './organization-account/organization-account.module#OrganizationAccountModule',
    canLoad: [AuthGuardService]
  },
  {
    path: 'subscription',
    loadChildren: './subscription/subscription.module#SubscriptionModule',
    canLoad: [AuthGuardService],

  },
  {path: '', redirectTo: '/console/overview', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes, {
        enableTracing: false,
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}

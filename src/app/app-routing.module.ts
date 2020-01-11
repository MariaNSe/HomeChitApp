import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MainDashboardComponent} from './main-dashboard/main-dashboard.component';
import {MonthlyBudgetComponent} from './monthly-budget/monthly-budget.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {SettingsPageComponent} from './settings-page/settings-page.component';
import {UserInfoComponent} from './user-info/user-info.component';
import {ShopListPageComponent} from './shop-list-page/shop-list-page.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: MainDashboardComponent
  },
  {
    path: 'monthly-plan',
    component: MonthlyBudgetComponent
  },
  {
    path: 'shop-list',
    component: ShopListPageComponent
  },
  {
    path: 'settings',
    component: SettingsPageComponent
  },
  {
    path: 'user/:id',
    component: UserInfoComponent
  },
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}

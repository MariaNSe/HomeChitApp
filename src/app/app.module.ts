import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { SignInComponent } from './modules/sign-in/sign-in.component'
import { MainMenuComponent } from './modules/main-menu/main-menu.component'
import { AppRoutingModule } from './app-routing.module'
import { MainDashboardComponent } from './modules/main-dashboard/main-dashboard.component'
import { DashboardComponent } from './modules/main-dashboard/dashboard/dashboard.component'
import { UserDetailsComponent } from './modules/main-dashboard/user-details/user-details.component'
import { SharedComponent } from './modules/main-dashboard/shared/shared.component'
import { MaterialModule } from './material.module'
import { MonthlyBudgetComponent } from './modules/monthly-budget/monthly-budget.component'
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component'
import { SettingsPageComponent } from './modules/settings-page/settings-page.component'
import { UserInfoComponent } from './modules/user-info/user-info.component'
import { ShopListPageComponent } from './modules/shop-list-page/shop-list-page.component'
import { MenuContainerComponent } from './modules/menu-container/menu-container.component'
import { MonthlyBudgetModule } from './modules/monthly-budget/montly-budget.module'

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    MainMenuComponent,
    MainDashboardComponent,
    DashboardComponent,
    UserDetailsComponent,
    SharedComponent,
    MonthlyBudgetComponent,
    PageNotFoundComponent,
    SettingsPageComponent,
    UserInfoComponent,
    ShopListPageComponent,
    MenuContainerComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    MonthlyBudgetModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

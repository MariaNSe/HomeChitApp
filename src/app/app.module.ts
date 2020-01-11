import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { AppRoutingModule } from './app-routing.module';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { DashboardComponent } from './main-dashboard/dashboard/dashboard.component';
import { UserDetailsComponent } from './main-dashboard/user-details/user-details.component';
import { SharedComponent } from './main-dashboard/shared/shared.component';
import { MaterialModule } from './material.module';
import { MonthlyBudgetComponent } from './monthly-budget/monthly-budget.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { ShopListPageComponent } from './shop-list-page/shop-list-page.component';
import { MenuContainerComponent } from './menu-container/menu-container.component';


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
    MenuContainerComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

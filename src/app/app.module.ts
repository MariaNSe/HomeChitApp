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

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    MainMenuComponent,
    MainDashboardComponent,
    DashboardComponent,
    UserDetailsComponent,
    SharedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

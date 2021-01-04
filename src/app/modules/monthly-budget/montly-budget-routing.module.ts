import { NgModule } from '@angular/core';
import { MetaGuard } from '@ngx-meta/core';
import { RouterModule, Routes } from '@angular/router';
import { MonthlyBudgetComponent } from './monthly-budget.component';

const routes: Routes = [
  {
    path: '',
    component: MonthlyBudgetComponent,
    canActivate: [MetaGuard],
    data: { meta: { title: 'listings.meta-title' } },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonthlyBudgetRoutingModule {}

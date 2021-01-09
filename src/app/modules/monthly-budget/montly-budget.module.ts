import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MonthlyBudgetEmptyStateComponent } from './monthly-budget-empty-state/monthly-budget-empty-state.component'
import { MonthlyBudgetRoutingModule } from './montly-budget-routing.module'

@NgModule({
  declarations: [MonthlyBudgetEmptyStateComponent],
  imports: [CommonModule, MonthlyBudgetRoutingModule],
  entryComponents: [],
  exports: [MonthlyBudgetEmptyStateComponent],
})
export class MonthlyBudgetModule {}

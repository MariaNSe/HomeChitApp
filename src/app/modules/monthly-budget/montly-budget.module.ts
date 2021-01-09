import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MonthlyBudgetEmptyStateComponent } from './monthly-budget-empty-state/monthly-budget-empty-state.component'
import { MonthlyBudgetRoutingModule } from './montly-budget-routing.module'
import { MatButtonModule } from '@angular/material'

@NgModule({
  declarations: [MonthlyBudgetEmptyStateComponent],
  imports: [CommonModule, MonthlyBudgetRoutingModule, MatButtonModule],
  entryComponents: [],
  exports: [MonthlyBudgetEmptyStateComponent],
})
export class MonthlyBudgetModule {}

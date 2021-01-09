import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { MonthlyBudgetEmptyStateComponent } from './monthly-budget-empty-state.component'

describe('MonthlyBudgetEmptyStateComponent', () => {
  let component: MonthlyBudgetEmptyStateComponent
  let fixture: ComponentFixture<MonthlyBudgetEmptyStateComponent>

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [MonthlyBudgetEmptyStateComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyBudgetEmptyStateComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

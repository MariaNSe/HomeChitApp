import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MenuContainerComponent } from './menu-container.component';

describe('MenuContainerComponent', () => {
  let component: MenuContainerComponent;
  let fixture: ComponentFixture<MenuContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

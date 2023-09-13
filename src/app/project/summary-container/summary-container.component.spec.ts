import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryContainerComponent } from './summary-container.component';

describe('SummaryContainerComponent', () => {
  let component: SummaryContainerComponent;
  let fixture: ComponentFixture<SummaryContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SummaryContainerComponent]
    });
    fixture = TestBed.createComponent(SummaryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

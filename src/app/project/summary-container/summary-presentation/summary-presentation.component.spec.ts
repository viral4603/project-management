import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryPresentationComponent } from './summary-presentation.component';

describe('SummaryPresentationComponent', () => {
  let component: SummaryPresentationComponent;
  let fixture: ComponentFixture<SummaryPresentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SummaryPresentationComponent]
    });
    fixture = TestBed.createComponent(SummaryPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

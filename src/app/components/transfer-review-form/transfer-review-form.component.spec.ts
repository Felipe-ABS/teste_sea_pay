import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferReviewFormComponent } from './transfer-review-form.component';

describe('TransferReviewFormComponent', () => {
  let component: TransferReviewFormComponent;
  let fixture: ComponentFixture<TransferReviewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransferReviewFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferReviewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

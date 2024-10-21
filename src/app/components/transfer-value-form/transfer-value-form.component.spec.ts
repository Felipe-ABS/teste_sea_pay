import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferValueFormComponent } from './transfer-value-form.component';

describe('TransferValueFormComponent', () => {
  let component: TransferValueFormComponent;
  let fixture: ComponentFixture<TransferValueFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransferValueFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferValueFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

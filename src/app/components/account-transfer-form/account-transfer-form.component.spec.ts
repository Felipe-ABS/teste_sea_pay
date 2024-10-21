import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTransferFormComponent } from './account-transfer-form.component';

describe('AccountTransferFormComponent', () => {
  let component: AccountTransferFormComponent;
  let fixture: ComponentFixture<AccountTransferFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountTransferFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountTransferFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

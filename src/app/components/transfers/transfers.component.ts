import { Component } from '@angular/core';
import { AccountTransferFormComponent } from "../account-transfer-form/account-transfer-form.component";
import { TransferValueFormComponent } from "../transfer-value-form/transfer-value-form.component";
import { TransferReviewFormComponent } from "../transfer-review-form/transfer-review-form.component";
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-transfers',
  standalone: true,
  imports: [
    AccountTransferFormComponent,
    TransferValueFormComponent,
    TransferReviewFormComponent,
    ReactiveFormsModule
  ],
  templateUrl: './transfers.component.html',
  styleUrl: './transfers.component.css'
})
export class TransfersComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      accountKey: [''],
      transferValue: [''],

    })
  }
}

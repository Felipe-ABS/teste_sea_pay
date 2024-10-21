import { Component } from '@angular/core';
import { AccountTransferFormComponent } from "../account-transfer-form/account-transfer-form.component";
import { TransferValueFormComponent } from "../transfer-value-form/transfer-value-form.component";
import { TransferReviewFormComponent } from "../transfer-review-form/transfer-review-form.component";

@Component({
  selector: 'app-transfers',
  standalone: true,
  imports: [AccountTransferFormComponent, TransferValueFormComponent, TransferReviewFormComponent],
  templateUrl: './transfers.component.html',
  styleUrl: './transfers.component.css'
})
export class TransfersComponent {

}

import { Component } from '@angular/core';
import { TransactionsComponent } from "../../components/transactions/transactions.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TransactionsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  
}

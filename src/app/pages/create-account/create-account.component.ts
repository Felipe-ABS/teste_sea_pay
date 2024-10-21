import { Component } from '@angular/core';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {
  isChecked:boolean = true;
  toggle() {
    this.isChecked = !this.isChecked;
  }
}

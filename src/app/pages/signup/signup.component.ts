import { Component, DestroyRef, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NormalAccountComponent } from "../../components/normal-account/normal-account.component";
import { StoreAccountComponent } from "../../components/store-account/store-account.component";
import { AuthService } from '../../services/auth.service';
import { AccountType } from '../../types/account-type';
import { IUser } from '../../interfaces/i-user';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, NormalAccountComponent, StoreAccountComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  form: FormGroup;
  accountType: AccountType = AccountType.shopkeeper;
  isChecked:boolean = false;
  constructor(
        private fb: FormBuilder,
        private auth: AuthService,
        private destroyRef: DestroyRef
      ) {
        this.accountType = AccountType.shopkeeper;
        this.form = this.fb.group({
          id: [1],
          email: ['', Validators.required],
          password: ['', Validators.required],
          confirmPassword: ['', Validators.required],
          nomeCompleto: [''],
          accountType: [AccountType.standard],
          registration: [''],
        });
  }

  onSignupSubmit() {
    console.log(this.form);
    console.log(localStorage.getItem('jwt_token'));
    if (!this.form.valid) {
      return;
    }

    this.auth.signup(this.form.value as IUser).pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe((data) => {
      console.log("Subscribe")
    });
  }

  toggle() {

    this.isChecked = !this.isChecked;
    if(this.isChecked) {
      this.accountType = AccountType.shopkeeper;
      console.log("true");
      console.log(localStorage);
      console.log(this.accountType);
    } else {
      this.accountType = AccountType.standard
      console.log("false");
      console.log(localStorage);
      console.log(this.accountType);
    }
  }
}

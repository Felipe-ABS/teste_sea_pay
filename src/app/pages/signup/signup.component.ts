import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NormalAccountComponent } from "../../components/normal-account/normal-account.component";
import { StoreAccountComponent } from "../../components/store-account/store-account.component";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, NormalAccountComponent, StoreAccountComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  @Output() eventoTeste= new EventEmitter();
  form: FormGroup;
  isChecked:boolean = false;
  constructor(
        private fb: FormBuilder,
        private auth: AuthService
      ) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      razaoSocial: ['', Validators.required],
      cnpj: ['', Validators.required],
    });
  }

  signup() {
    const val = this.form.value;
    console.log(val);
    // console.log(this.auth.getFromDatabase());

    if(val.email && (val.password == val.confirmPassword)) {
      console.log('Conta de Usuário Criada');
      console.log('email: ', val.email);
      console.log('password: ', val.password);
      console.log('confirmPassword: ', val.confirmPassword);
    } else {
      console.log('Preencha o restante do formuiário');
    }
  }

  toggle() {
    this.isChecked = !this.isChecked;
  }
}

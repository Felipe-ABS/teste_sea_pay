import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IUser } from '../../interfaces/i-user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.form = this.fb.group({
      registration: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  login() {
    const val: IUser = this.form.value;

    
    if(val.registration && val.password) {
      console.log("----Funcionando----");
      console.log(val);
      console.log(this.authService.login(val.registration, val.password));
      this.authService.login(val.registration, val.password)
      console.log("-------------------");
    } else {
      console.log("----Erro----");
      console.log("Necessário preencher ambos os campos");
      console.log(val);
      console.log(this.authService.login(val.registration, val.password));
      console.log("------------");
    }
  }
}

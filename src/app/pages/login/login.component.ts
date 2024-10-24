import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IUser } from '../../interfaces/i-user';
import { AuthService } from '../../services/auth.service';
import { ILogin } from '../../interfaces/i-login';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form: FormGroup;
  private readonly authService = inject(AuthService);
  private readonly fb = inject(FormBuilder);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    this.form = this.fb.group({
      registration: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  onLoginFormSubmitted() {
    if (!this.form.valid) {
      return;
    }

    this.authService.login(this.form.value as ILogin).pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe();
  }


  // login() {
  //   const val: ILogin = this.form.value;
    
  //   if(val.registration && val.password) {
  //     console.log("----Funcionando----");
  //     console.log(val);
  //     console.log(this.authService.login(val));
  //     this.authService.login(val)
  //     console.log("-------------------");
  //   } else {
  //     console.log("----Erro----");
  //     console.log("Necessário preencher ambos os campos");
  //     console.log(val);
  //     console.log(this.authService.login(val));
  //     console.log("------------");
  //   }
  // }

  logout() {
    this.authService.logout();
  }
}

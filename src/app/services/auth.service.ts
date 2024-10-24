import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs'
import { DestroyRef, Injectable, WritableSignal, inject, signal } from '@angular/core';
import { IUser } from '../interfaces/i-user';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ILogin } from '../interfaces/i-login';
import { LoginResponse } from '../types/login-response.type';
import { IS_PUBLIC } from '../interceptors/auth.interceptor';
import { ILoginSuccess } from '../interfaces/i-login-success';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'localhost:3000';
  private readonly http = inject(HttpClient)
  private readonly jwtHelper = inject(JwtHelperService);
  private readonly router = inject(Router)
  // private readonly CONTEXT = {context: new HttpContext().set(IS_PUBLIC, true)};
  private readonly destroyRef = inject(DestroyRef);
  private readonly TOKEN_EXPIRY_THRESHOLD_MINUTES = 15;
  

  get user(): WritableSignal<IUser | null> {
    const token = localStorage.getItem('jwt_token');
    console.log(token);
    return signal(token ? this.jwtHelper.decodeToken(token) : null);
  }

  isAuthenticated(): boolean {
    return !this.jwtHelper.isTokenExpired();
  }

  refreshToken(): Observable<LoginResponse | null> {
    const refresh_token = localStorage.getItem('refresh_token');
    if (!refresh_token) {
      return of();
    }

    return this.http.post<LoginResponse>(`${this.apiUrl}/auth/refresh-token`, {refresh_token})
      .pipe(
        catchError(() => of()),
        tap(_data => {
          const refresh_token = localStorage.getItem('refresh_token');
          if (!refresh_token) {
            return of();
          } else {
            return console.log(`_Data: ${_data}`);
          }
        })
      )
  }

  login(body: ILogin): Observable<LoginResponse> {
    // console.log(this.CONTEXT);
    return this.http.post<LoginResponse>(`${this.apiUrl}/auth/signin`, body)
      .pipe(
        catchError(error => {
          if(error.status == 401) {
            console.log("Invalid Credentials");
          }
          return of();
        }),
        tap(data => {
          const loginSuccessData = data as ILoginSuccess;
          this.storeTokens(loginSuccessData);
          this.scheduleTokenRefresh(loginSuccessData.jwt_token);
          // this.router.navigate(['/']);
        })
      )
  };

  signup(body: IUser): Observable<LoginResponse> {
    console.log("BODY");
    console.log(body);
    return this.http.post<LoginResponse>(`${this.apiUrl}/auth/signup`, body)
      .pipe(
        catchError(error => {
          console.log("erro")
          if(error.status == 401) {
            console.log("Invalid Credentials");
          }
          return of();
        }),
        tap(data => {
          console.log('Entrou');
          const loginSuccessData = data as ILoginSuccess;
          this.storeTokens(loginSuccessData);
          this.scheduleTokenRefresh(loginSuccessData.jwt_token);
          this.router.navigate(['/login']);
        })
      )
  }

  logout(): void {
    // if you don't have any backend route to invalidate the refresh token
    // then just remove localStorage items and redirect to login route
    const refresh_token = localStorage.getItem('expiresAt');
    this.http.post<LoginResponse>(`${this.apiUrl}/auth/refresh-token`, {refresh_token})
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('refresh_token');
        this.router.navigate(['/login']);
      });
  }

  scheduleTokenRefresh(token: string) {
    const expirationTime = this.jwtHelper.getTokenExpirationDate(token)?.getTime();
    const refreshTime = expirationTime ? expirationTime - this.TOKEN_EXPIRY_THRESHOLD_MINUTES * 60 * 1000 : Date.now();
    const refreshInterval = refreshTime - Date.now();

    if (refreshInterval > 0) {
      setTimeout(() => {
        this.refreshToken()
          .pipe(takeUntilDestroyed(this.destroyRef))
          .subscribe();
      }, refreshInterval);
    }
  }

  storeTokens(data: ILoginSuccess): void {
    localStorage.setItem('jwt_token', JSON.stringify(data.jwt_token));
    localStorage.setItem('expiresAt', JSON.stringify(data.expiresAt));
  }
}

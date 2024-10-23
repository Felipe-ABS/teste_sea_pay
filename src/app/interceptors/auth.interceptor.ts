import { HttpContextToken, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { switchMap } from 'rxjs/operators';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  if (req.context.get(IS_PUBLIC)) {
    return next(req);
  }
  
  if (authService.isAuthenticated()) {
    const authRequest = addAuthorizationHeader(req);
    return next(authRequest);
  } else {
    return authService.refreshToken().pipe(
      switchMap(() => {
        const authRequest = addAuthorizationHeader(req);
        return next(authRequest);
      })
    );
  }
};

const addAuthorizationHeader = (req: HttpRequest<any>) => {
  const token = localStorage.getItem('token');
  return req.clone({
    headers: req.headers.set('Authorization', `Bearer ${token}`)
  });
};


export const IS_PUBLIC = new HttpContextToken(() => false);
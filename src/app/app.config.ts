import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { JWT_OPTIONS, JwtModule } from '@auth0/angular-jwt';
import { AuthService } from './services/auth.service';
import { authInterceptor } from './interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])),
    importProvidersFrom([
      JwtModule.forRoot({
        jwtOptionsProvider: {
          provide: JWT_OPTIONS,
          useFactory: jwtOptionsFactory,
        }
      })
    ]),
    
  ]
};

export function jwtOptionsFactory() {
  console.log("LocalStorage");
  console.log(localStorage)
  return {
    tokenGetter: () => {
      return localStorage.getItem('jwt_token');
    },
    whitelistedDomains: ['localhost:3000']
  };
}

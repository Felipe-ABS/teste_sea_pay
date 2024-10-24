import { Routes } from '@angular/router';
import { TestComponentComponent } from './components/test-component/test-component.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { TransfersComponent } from './components/transfers/transfers.component';
import { SignupComponent } from './pages/signup/signup.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
    {path: 'test-component', component: TestComponentComponent},
    {path: 'signup', component: SignupComponent},
    {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component').then(mod => mod.LoginComponent),
        // canActivate: [authGuard]
    },
    {
        path: 'signup',
        loadComponent: () => import('./pages/signup/signup.component').then(mod => mod.SignupComponent),
        // canActivate: [authGuard]
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard.component').then(mod => mod.DashboardComponent),
        // canActivate: [authGuard]
    },
    {path: 'transactions', component: TransactionsComponent},
    {path: 'transfers', component: TransfersComponent},
    {path: '**', component: NotFoundComponent},
];

import { Routes } from '@angular/router';
import { TestComponentComponent } from './components/test-component/test-component.component';
import { LoginComponent } from './pages/login/login.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { TransfersComponent } from './components/transfers/transfers.component';

export const routes: Routes = [
    {path: 'test-component', component: TestComponentComponent},
    {path: 'login', component: LoginComponent},
    {path: 'create-account', component: CreateAccountComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'transactions', component: TransactionsComponent},
    {path: 'transfers', component: TransfersComponent},
    {path: '**', component: NotFoundComponent},
];

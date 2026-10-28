import { Routes } from '@angular/router';
import { Login } from './Pages/login/login.component';
import { DashboardComponent } from './Pages/dashboard-component/dashboard-component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'dashboard', component: DashboardComponent },
];

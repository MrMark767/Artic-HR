import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-component',
  imports: [],
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.css',
})
export class DashboardComponent {
  private router = inject(Router);

  user = {
    name: 'Ana García Pérez',
    roleDescription: 'Rol: CA (Colaborador Administrativo)',
    position: 'Supervisora de Operaciones',
    department: 'Operaciones',
    role: 'CA',
    email: 'ana.garcia@empresa.com',
  };

  onLogout(): void {
    this.router.navigate(['/login']);
  }
}

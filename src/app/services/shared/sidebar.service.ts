import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
  {
    titulo: 'Inicio',
    icono: 'fas fa-home',
    url: '/dashboard'
  },
  {
    titulo: 'Clientes',
    icono: 'fas fa-users',
    url: '/clientes'
  },
  {
    titulo: 'Productos',
    icono: 'fas fa-dolly',
    url: '/productos'
  },
  {
    titulo: 'Ordenes',
    icono: 'fas fa-book',
    url: '/ordeness'
  },
  {
    titulo: 'Reportes',
    icono: 'fas fa-chart-bar',
    url: '/reportes'
  }
  ];

  constructor() { }
}

import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProductosComponent } from './productos/productos.component';
import { OrdenesComponent } from './ordenes/ordenes.component';
import { AddClienteComponent } from './add-cliente/add-cliente.component';


const pagesRoutes: Routes = [
    {path: '',
     component: PagesComponent,
     children: [
        {path: 'dashboard', component: DashboardComponent},
        {path: 'addcliente', component: AddClienteComponent},
        {path: 'clientes', component: ClientesComponent},
        {path: 'productos', component: ProductosComponent},
        {path: 'ordenes', component: OrdenesComponent},
        {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
     ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);

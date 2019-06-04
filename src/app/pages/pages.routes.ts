import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientesComponent } from './clientes/clientes.component';


const pagesRoutes: Routes = [
    {path: '',
     component: PagesComponent,
     children: [
        {path: 'dashboard', component: DashboardComponent},
        {path: 'clientes', component: ClientesComponent},
        {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
     ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);

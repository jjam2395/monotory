import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';
import { ClientesComponent } from './pages/clientes/clientes.component';

const appRoutes: Routes = [
    {path: '',
     component: PagesComponent,
     children: [
        {path: 'dashboard', component: DashboardComponent},
        {path: 'clientes', component: ClientesComponent},
        {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
     ]
    },
    {path: 'login', component: LoginComponent},
    {path: '**', component: NopagefoundComponent}

];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true});

import { NgModule } from '@angular/core';

import { PAGES_ROUTES } from './pages.routes';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientesComponent } from './clientes/clientes.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ClientesComponent
    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        ClientesComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES
    ]
})

export class PagesModule {}

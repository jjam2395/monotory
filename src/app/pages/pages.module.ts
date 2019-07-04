import { NgModule } from '@angular/core';

import { PAGES_ROUTES } from './pages.routes';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientesComponent } from './clientes/clientes.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { ProductosComponent } from './productos/productos.component';
import { OrdenesComponent } from './ordenes/ordenes.component';
import { AddClienteComponent } from './add-cliente/add-cliente.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';




@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ClientesComponent,
        ProductosComponent,
        OrdenesComponent,
        AddClienteComponent
    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        ClientesComponent
    ],
    imports: [
        SharedModule,
        ReactiveFormsModule,
        PAGES_ROUTES,
        CommonModule,
        FormsModule
    ]
})

export class PagesModule {}

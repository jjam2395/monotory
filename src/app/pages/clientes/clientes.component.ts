import { Component, OnInit, Injectable } from '@angular/core';
import { ClienteService } from '../../services/service.index';
import { Cliente } from 'src/app/models/cliente.model';

import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  forma: FormGroup;
  clientes: Cliente[] = [];
  totalRegistros = 0;
  editable = false;
  cargando = true;

  constructor(public _clienteServices: ClienteService) {
  }

  ngOnInit() {
    this.obtenerClientes();

  }

  obtenerClientes() {

    this.cargando = true;
    this._clienteServices.obtenerClientes()
        .subscribe( (resp: any) => {
        this.clientes = resp;
        console.log(this.clientes);
        this.totalRegistros = this.clientes.length;
        this.cargando = false;
    });
  }

  buscarClientes( termino: string){
    if (termino.length <= 0) {
      this.obtenerClientes();
      return;
    }

    this.cargando = true;
    this._clienteServices.buscarClientes(termino)
            .subscribe(( clientes: Cliente[] ) => {
                console.log(clientes);
                this.clientes = clientes;
                this.cargando = false;
            });
  }

  borrarCliente( cliente: Cliente){
    console.log(cliente);

    Swal.fire({
      title: 'Estas Seguro?',
      text: 'Esta a punto de borrar a ' + cliente.nombreCliente + ' ' + cliente.apellidoCliente,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Borrar!'
    }).then((result) => {
      if (result.value) {

        this._clienteServices.borrarCliente(cliente.telefonoCliente)
                  .subscribe(resp =>{
                    console.log(resp);
                    this.obtenerClientes();
                  });
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      }
    });

  }

  actualizarCliente(cliente: Cliente) {

   this._clienteServices.actualizarCliente(cliente, cliente.telefonoCliente)
          .subscribe();
   this.editable = false;

  }

}

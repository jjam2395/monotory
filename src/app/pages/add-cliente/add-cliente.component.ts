import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';

import swal from 'sweetalert2';
import { ClienteService } from '../../services/service.index';
import { Cliente } from '../../models/cliente.model';


@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.scss']
})
export class AddClienteComponent implements OnInit {

  forma: FormGroup;

  constructor(
    // tslint:disable-next-line:variable-name
    public _clienteService: ClienteService
  ) { }

  ngOnInit() {

    this.forma = new FormGroup({
      nombreCliente: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      apellidoCliente: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      emailCliente: new FormControl(null, [Validators.required, Validators.email]),
      telefonoCliente: new FormControl(null, [Validators.required, Validators.minLength(7)]),
      direccionCliente: new FormControl(null)
  });

  }

  addCliente() {
    console.log ('Forma Válida', this.forma.valid);
    console.log(this.forma.value);

    if (this.forma.invalid) {
      return;
    } else {
      swal.fire(
        'Excelente',
        'Cliente Añadido correctamente',
        'success'
      );

      let cliente = new Cliente(
        this.forma.value.nombreCliente,
        this.forma.value.apellidoCliente,
        this.forma.value.emailCliente,
        this.forma.value.telefonoCliente,
        this.forma.value.direccionCliente
      );

      this._clienteService.crearCliente(cliente)
          .subscribe( resp => {
            console.log (resp);
          });
    }


  }

}

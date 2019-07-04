import { Injectable } from '@angular/core';
import { Cliente } from '../../models/cliente.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor( public http: HttpClient) {

    console.log('Servicio de cliente listo');

   }

   obtenerClientes(){
    let url = URL_SERVICIOS + '/cliente';
    return this.http.get(url);

   }

   crearCliente( cliente: Cliente) {
     let url = URL_SERVICIOS + '/cliente';
     return  this.http.post( url, cliente );

   }

   actualizarCliente( cliente: Cliente, telefonoCliente: string) {
    let url = URL_SERVICIOS + '/cliente/' + telefonoCliente;
    return  this.http.put( url, cliente );

  }

   borrarCliente( telefonoCliente: string ) {
     let url = URL_SERVICIOS + '/cliente/' + telefonoCliente;
     return this.http.delete(url);
   }

   buscarClientes(termino: string){
     let url = URL_SERVICIOS + '/cliente/tel/' + termino;
     return this.http.get(url);
   }
}

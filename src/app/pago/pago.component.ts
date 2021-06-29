import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {

  meses: any[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  anos: any[] = ['2021', '2022', '2023', '2024', '2025'];
  region: any[] = ['Región de Tarapacá', 'Región de Antofagasta', 'Región de Atacama', 'Región de Coquimbo',
    'Región de Valparaíso', 'Región del Libertador General Bernardo O’Higgins', 'Región del Maule',
    'Región del Biobío', 'Región de La Araucanía', 'Región de Los Lagos', 'Región Aysén del General Carlos Ibáñez del Campo',
    'Región de Magallanes y Antártica Chilena', 'Región Metropolitana de Santiago', 'Región de Los Ríos', 'Región de Arica y Parinacota',
    'Región de Ñuble'];
  tarjeta: any[] = ['Debito', 'Crédito'];
  pagoCarrito: any[] = [];
  pagoCantidad: any[] = [];
  total!: number;
  constructor(private pagoTotal: CarritoService) { }

  compra = new FormGroup(
    {
      ciudad: new FormControl('', Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(15), Validators.pattern("[A-Za-z ]*")])),
      region: new FormControl('', Validators.required),
      direccion: new FormControl('', Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(20)])),
      calle: new FormControl('', Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(20)])),
      codigoPostal: new FormControl('', Validators.compose([Validators.required,Validators.minLength(7),Validators.maxLength(7)])),
      nombreCliente: new FormControl('', Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(20)])),
      tarjeta: new FormControl('', Validators.required),
      numeroTarjeta: new FormControl('', Validators.compose([Validators.required, Validators.minLength(16),Validators.maxLength(16)])),
      codigoSeguridad: new FormControl('', Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(3)])),
      meses: new FormControl('', Validators.required),
      anos: new FormControl('', Validators.required)
    })
  ngOnInit() {
    this.pagoCarrito = this.pagoTotal.productoCarrito;
    this.pagoCantidad = this.pagoTotal.productoCantidad;
    this.total = this.pagoTotal.totalCarrito;
  }
  validar(){
    if (this.compra.valid) {
    alert('compra con exito');
   this.compra.reset();
   this.pagoCarrito = [];
   this.pagoCantidad=[];
   this.total=0;
    } else {
    
      this.compra.markAllAsTouched();
    }

  
  }
}

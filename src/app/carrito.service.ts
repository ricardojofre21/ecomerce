import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  productoCarrito: any = [];
  productoCantidad = [
    {
      codigo: 0,
      cantidad: 0,
    }];
  totalCarrito: number = 0;
  constructor() { }
}

import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  @Input() productosActual!: any;
  totalDinero!: number;
  totalCarrito = 0;
  clave = new FormControl(''); //tags
  cantidad = new FormControl(); //cantiodad producto
  productosCarrito: any[] = []; // Array para el carrito
  productosCantidad: any = [];
  currentPg: number = 1;
  busqueda: any[] = [];/// guarda las palabras de la busqeuda
  guardarBusqueda: any = [];

  constructor(private listaCarrito: CarritoService) { }

  ngOnInit(): void {
    this.productosCarrito = this.listaCarrito.productoCarrito;
    this.productosCantidad = this.listaCarrito.productoCantidad;
    this.totalDinero = this.listaCarrito.totalCarrito;
  }
  productosCarritoActual: any;
  agregarProducto(i: any) {
    for (let j = 0; j < this.productosCarrito.length; j++) {
      if (this.productosCarrito[j].codigo == this.productosActual[i].codigo) {
        console.log("Ya tiene el producto")
        for (let j = 0; j < this.productosCantidad.length; j++) {
          if (this.productosActual[i].codigo == this.productosCantidad[j].codigo) {
            this.productosCantidad[j].cant += 1;
          }
        }
        this.totalDinero += this.productosActual[i].precio;
        localStorage.setItem("total", JSON.stringify(this.totalDinero));
        return;
      }
    }
    console.log("No tiene el producto");
    this.productosCarrito.push(this.productosActual[i]);
    this.productosCantidad.push({ codigo: this.productosActual[i].codigo, cant: 1 });
    this.totalDinero += this.productosActual[i].precio;
    localStorage.setItem("total", JSON.stringify(this.totalDinero))

    localStorage.setItem("carrito", JSON.stringify(this.productosCarrito));
    localStorage.setItem("cantidad", JSON.stringify(this.productosCantidad));

    this.listaCarrito.productoCarrito = this.productosCarrito;
    this.listaCarrito.productoCantidad = this.productosCantidad;
    this.listaCarrito.totalCarrito = this.totalDinero;
  }

  eliminarProducto(cod: any) {
    for (let i = 0; i < this.productosCarrito.length; i++) {
      if (this.productosCarrito[i].codigo == cod) {
        this.totalDinero -= (this.productosCarrito[i].precio * this.productosCantidad[i + 1].cant);
        localStorage.setItem("total", JSON.stringify(this.totalDinero))
        this.productosCarrito.splice(i, 1);
        this.productosCantidad.splice(i + 1, 1);
      }
    }
    localStorage.setItem("carrito", JSON.stringify(this.productosCarrito));
    localStorage.setItem("cantidad", JSON.stringify(this.productosCantidad));

    this.listaCarrito.productoCarrito = this.productosCarrito;
    this.listaCarrito.productoCantidad = this.productosCantidad;
    this.listaCarrito.totalCarrito = this.totalDinero;
  }

  actualizarProducto(cod: any) {
    if (this.cantidad.value == null) {
      return;
    }
    for (let i = 0; i < this.productosCarrito.length; i++) {
      if (this.productosCarrito[i].codigo == cod) {
        this.totalDinero -= (this.productosCarrito[i].precio * this.productosCantidad[i + 1].cant);
        this.productosCantidad[i + 1].cant = this.cantidad.value;
        this.totalDinero += (this.productosCarrito[i].precio * this.productosCantidad[i + 1].cant);
        localStorage.setItem("total", JSON.stringify(this.totalDinero))
      }
    }
    localStorage.setItem("cantidad", JSON.stringify(this.productosCantidad));
    this.listaCarrito.totalCarrito = this.totalDinero;
    this.listaCarrito.productoCantidad = this.productosCantidad;
  }

  busquedaClave() {
    for (let i = 0; i < this.guardarBusqueda.length; i++) {
      if (this.guardarBusqueda[i] === this.clave.value) {
        return;
      }
    }

    for (let i = 0; i < this.productosActual.length; i++) {
      if (this.productosActual[i].tags.search(this.clave.value) == -1) {
      }
      else {
        if (!this.busqueda.includes(this.productosActual[i])) {
          this.busqueda.push(this.productosActual[i]);
        }

      }
    }
    this.guardarBusqueda.push(this.clave.value)
    this.currentPg = 1;
  }

  quitarBusqueda() {
    this.busqueda = [];
    this.guardarBusqueda = [];
    this.clave.setValue("");
  }
}

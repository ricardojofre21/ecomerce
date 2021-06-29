import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent {


  // productos = [{
  //  codigo:1001, nombre: 'Pc Gamer Next', descripcion: 'GráficoRTX 2080 8GB procesador intel i9 9900KF', precio: 728189,
  //   img: '../../assets/img/descarga.jfif', tags: "gamer, next"
  // },
  // {
  //  codigo:1002, nombre: 'Pc Gamer Pro', descripcion: 'GráficoRTX 3080 8GB procesador intel i9 9900KF', precio: 728189,
  //   img: '../../assets/img/pc.jpg', tags: "gamer, next, pro"
  // },
  // {
  //  codigo:1003, nombre: 'Pc Gamer Ultra', descripcion: 'GráficoRTX 3080 16GB procesador intel i9 9900KF', precio: 778189,
  //   img: '../../assets/img/images.jfif', tags: "gamer, next,ultra"
  // },
  // {
  //  codigo:1004, nombre: 'Audifonos Gamer', descripcion: 'G733 Blanco G733 Blanco 9,7 mm de voz clara Gloria en tus oídos', precio: 75489,
  //   img: '../../assets/img/audifono.jfif', tags: "gamer, next"
  // },
  // {
  //  codigo:1005, nombre: 'Audifonos Game', descripcion: 'Cougar Gamer Black', precio: 25689,
  //   img: '../../assets/img/cougar.jpg', tags: "gamer, next"
  // },
  // {
  //  codigo:1006, nombre: 'Audifonos Game', descripcion: 'Ryzen Black', precio: 72189,
  //   img: '../../assets/img/ryzen.jpg', tags: "gamer, next"
  // }];

  productosActual = [{
    codigo: 1001, nombre: 'Pc Gamer Next', descripcion: 'GráficoRTX 2080 8GB procesador intel i9 9900KF', precio: 728189,
    img: '../../assets/img/descarga.jfif', tags: "pc,rtx, next"
  },
  {
    codigo: 1002, nombre: 'Pc Gamer Pro', descripcion: 'GráficoRTX 3080 8GB procesador intel i9 9900KF', precio: 728189,
    img: '../../assets/img/pc.jpg', tags: "pc, pro"
  },
  {
    codigo: 1003, nombre: 'Pc Gamer Ultra', descripcion: 'GráficoRTX 3080 16GB procesador intel i9 9900KF', precio: 778189,
    img: '../../assets/img/images.jfif', tags: "pc,ultra"
  },
  {
    codigo: 1004, nombre: 'Audifonos Gamer', descripcion: 'Logitech G733 Blanco 9,7 mm de voz clara Gloria en tus oídos', precio: 75489,
    img: '../../assets/img/audifono.jfif', tags: "audifonos,g773, logitech"
  },
  {
    codigo: 1005, nombre: 'Audifonos Gamer', descripcion: 'Cougar Gamer Black', precio: 25689,
    img: '../../assets/img/cougar.jpg', tags: "audifonos,cougar"
  },
  {
    codigo: 1006, nombre: 'Audifonos Gamer', descripcion: 'Ryzen Black', precio: 72189,
    img: '../../assets/img/ryzen.jpg', tags: "audifonos,ryzen"
  },
  {
    codigo: 1007, nombre: 'Teclado Gamer', descripcion: 'Red dragon', precio: 59990,
    img: '../../assets/img/teclado1.jfif', tags: " teclado,red"
  },
  {
    codigo: 1008, nombre: 'Teclado Gamer', descripcion: 'HP', precio: 40990,
    img: '../../assets/img/teclado2.jpg', tags: "teclado, hp "
  },
  {
    codigo: 1009, nombre: 'Teclado Gamer', descripcion: 'Ryzen Black pro', precio: 89000,
    img: '../../assets/img/teclado3.jpg', tags: "teclado, black,ryzen"
  },
  {
    codigo: 1010, nombre: 'Mouse Gamer', descripcion: 'Logitech', precio: 25189,
    img: '../../assets/img/mause1.jpg', tags: " mouse,logitech"
  },
  {
    codigo: 1011, nombre: 'Mouse Gamer', descripcion: 'Red dragon', precio: 32189,
    img: '../../assets/img/mause2.jpg', tags: "mouse,dragon"
  },
  {
    codigo: 1012, nombre: 'Mouse Gamer', descripcion: 'Phillips', precio: 22189,
    img: '../../assets/img/mause3.jpg', tags: "mouse, phillips"
  },
  {
    codigo: 1013, nombre: 'Silla Gamer', descripcion: 'Cougar s royal', precio: 372189,
    img: '../../assets/img/silla3.jpg', tags: "silla,royal, cougar"
  },
  {
    codigo: 1014, nombre: 'Silla Gamer', descripcion: 'Sevenwin white', precio: 272189,
    img: '../../assets/img/silla1.jfif', tags: "silla,white, sevenwin"
  },
  {
    codigo: 1015, nombre: 'Silla Gamer', descripcion: 'Ryzen white ultimate', precio: 379990,
    img: '../../assets/img/silla2.jfif', tags: "silla,ryzen, ultimate"
  }];


}

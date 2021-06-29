import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductoComponent } from './producto/producto.component';
import { ListarProductoComponent } from './listar-producto/listar-producto.component';
import { LoginComponent } from './login/login.component';
import { PagoComponent } from './pago/pago.component';
import { RouterModule, Routes } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';


const routes:Routes=[
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'pago',
    component:PagoComponent
  },
  {
    path:'producto',
    component:ProductoComponent
  },
  {
    path:'listar-producto',
    component:ListarProductoComponent
    
  }
] 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ProductoComponent,
    ListarProductoComponent,
    LoginComponent,
    PagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    [RouterModule.forRoot(routes)],
    NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

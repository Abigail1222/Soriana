import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.page.html',
  styleUrls: ['./resumen.page.scss'],
})
export class ResumenPage implements OnInit {
  flechaDer = "assets/flecha_derecha.png";
  numeroArticulos: number;
  subtotal: number;
  total: number;
  envio: number;
  direccion2: string;
  dia: string;
  hora: string;
  telefono: string;
  constructor(private route:Router, private carritoSvc: CartService) { }

  ngOnInit() {
    this.numeroArticulos = this.carritoSvc.getNumberItems();
    this.subtotal = this.carritoSvc.getSubtotal();
    this.total = this.carritoSvc.getTotal();
    this.envio = this.carritoSvc.getEnvio();
    this.direccion2 = this.carritoSvc.getDireccion();
    this.dia = this.carritoSvc.getDia();
    this.hora = this.carritoSvc.getHora();
    this.telefono = this.carritoSvc.getNumero();
  }

  confirmacion() {
    this.route.navigate(['confirmacion']);
  }

  metodo(){
    this.route.navigate(['metodo']);
  }

  direccion() {
    this.route.navigate(['proceso']);
  }

  redirect() {
    this.route.navigate(['home']);
  }


}

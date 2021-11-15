import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-promocion',
  templateUrl: './promocion.page.html',
  styleUrls: ['./promocion.page.scss'],
})
export class PromocionPage implements OnInit {
  flechaDer = "../assets/flecha_derecha.png";
  blusa_rosa = "../assets/blusa_rosa.jpg";
  descuento: boolean = true;
  envio: number;
  total: number;
  subtotal: number;
  constructor(private route:Router, private carritoSvc: CartService) { }

  ngOnInit() {
    this.envio = this.carritoSvc.getEnvio();
    this.total = this.carritoSvc.getTotal();
    this.subtotal = this.carritoSvc.getSubtotal();
  }

  resumen() {
    this.route.navigate(['resumen']);
  }

  envioGratis() {
    this.envio = this.carritoSvc.envioGratis();
    this.total = this.carritoSvc.getTotal();
  }

}

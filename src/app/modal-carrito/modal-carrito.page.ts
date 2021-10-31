import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-modal-carrito',
  templateUrl: './modal-carrito.page.html',
  styleUrls: ['./modal-carrito.page.scss'],
})
export class ModalCarritoPage implements OnInit {
  items = this.cartService.getItems();
  subtotal = this.cartService.getSubtotal().toString();
  total = this.cartService.getSubtotal()+49;

  constructor(private modalCtrl: ModalController, private route:Router, private cartService: CartService) { }

  ngOnInit() {
    console.log(this.subtotal);
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

  compra(){
    this.modalCtrl.dismiss();
    this.route.navigate(['compra']);
  }
}

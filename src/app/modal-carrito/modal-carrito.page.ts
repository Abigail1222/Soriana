import { ChangeDetectorRef, Component, OnInit, AfterViewInit } from '@angular/core';
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

  constructor(private cdr: ChangeDetectorRef, private modalCtrl: ModalController, private route:Router, private cartService: CartService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
  
  cerrar() {
    this.modalCtrl.dismiss();
  }

  compra(){
    this.route.navigate(['compra']);
    this.modalCtrl.dismiss();
  }

  eliminar() {
    this.cartService.emptyCart();
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalCarritoPage } from '../modal-carrito/modal-carrito.page';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-modal-articulo',
  templateUrl: './modal-articulo.page.html',
  styleUrls: ['./modal-articulo.page.scss'],
})
export class ModalArticuloPage implements OnInit {

  @Input() name: string;
  @Input() image: string;
  @Input() url: string;
  @Input() description: string;
  @Input() price: string;
  @Input() size: string;

  constructor(private modalCtrl: ModalController,  private cartService: CartService) { }
  id: any;
  ngOnInit() {
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

  addToCart(id: any) {
    this.cartService.addToCart(id);
    // window.alert('Your product has been added to the cart!');
    this.lanzarCarrito();
    this.modalCtrl.dismiss();
  }

  async lanzarCarrito() {
    const myModal = await this.modalCtrl.create({
      component: ModalCarritoPage,
      backdropDismiss: true,
      showBackdrop: true,
      cssClass: 'modalCarrito'
    });

    myModal.present();
    
}
}

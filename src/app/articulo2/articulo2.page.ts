import { Component, Input, OnInit } from '@angular/core';
import { ModalCarritoPage } from '../modal-carrito/modal-carrito.page';
import { CartService } from '../services/cart.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-articulo2',
  templateUrl: './articulo2.page.html',
  styleUrls: ['./articulo2.page.scss'],
})
export class Articulo2Page implements OnInit {

  
  @Input() name: string;
  @Input() image: string;
  @Input() url: string;
  @Input() description: string;
  @Input() price: string;
  @Input() size: string;

  constructor(private modalCtrl: ModalController,  private cartService: CartService) { }

  ngOnInit() {
  }

  
  cerrar() {
    this.modalCtrl.dismiss();
  }

  addToCart(id: any) {
    this.cartService.addToCart(id);
    // window.alert('Your product has been added to the cart!');
    this.modalCtrl.dismiss();
    this.lanzarCarrito();
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

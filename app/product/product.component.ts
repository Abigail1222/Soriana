import { Component, OnInit } from '@angular/core';
import { ModalController, ModalOptions} from '@ionic/angular';
import { ModalArticuloPage } from '../modal-articulo/modal-articulo.page';
import { ModalCarritoPage } from '../modal-carrito/modal-carrito.page';
import { CartService } from '../services/cart.service';
import { Product } from '../product.js';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  products = [
    {
      id: 1,
      name: "Blusa rosa",
      image: '../assets/blusa_rosa.jpg',
      url: '',
      description: 'Cherokee',
      size: '9',
      price: '$199'
    },
    {
      id: 2,
      name: "Short",
      image: '../assets/short.jpg',
      url: '',
      description: 'LEVIS',
      size: 'M',
      price: '$259'
    },
    {
      id: 3,
      name: "Zapatillas",
      image: '../assets/zapatillas.png',
      url: '',
      description: 'Flexi',
      size: '24',
      price: '$239'
    },
    {
      id: 4,
      name: "Lentes",
      image: '../assets/lentes.png',
      url: '',
      description: 'Panama',
      size: 'Unitalla',
      price: '$299'
    }
  ];

  constructor(private modalCtrl: ModalController, private cartService: CartService) {
    this.productos();
   }

  ngOnInit() {}

  async lanzarModal(int) {
      const myModal = await this.modalCtrl.create({
        component: ModalArticuloPage,
        backdropDismiss: true,
        showBackdrop: true,
        cssClass: 'modalArticulo',
        componentProps: this.products[int - 1]
      });

      myModal.present();
  }

  productos () {
    this.products
  }

  addToCart(id: any) {
    this.cartService.addToCart(id);
    // window.alert('Your product has been added to the cart!');
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

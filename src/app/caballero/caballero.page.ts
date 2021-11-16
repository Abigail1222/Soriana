import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { ModalController, ModalOptions} from '@ionic/angular';
import { ModalArticuloPage } from '../modal-articulo/modal-articulo.page';
import { ModalCarritoPage } from '../modal-carrito/modal-carrito.page';
import { Product } from '../product.js';

@Component({
  selector: 'app-caballero',
  templateUrl: './caballero.page.html',
  styleUrls: ['./caballero.page.scss'],
})
export class CaballeroPage implements OnInit {
  products = [
    {
      id: 5,
      name: "Camisa",
      image: 'assets/camisa.jpg',
      url: '',
      description: 'Marca Bazzar',
      size: '32',
      price: '$349'
    },
    {
      id: 6,
      name: "Playera",
      image: 'assets/playera.jpg',
      url: '',
      description: 'Marvel',
      size: 'L',
      price: '$489'
    },
    {
      id: 7,
      name: "Saco",
      image: 'assets/saco.jpg',
      url: '',
      description: 'T&H',
      size: 'M',
      price: '$1039'
    },
    {
      id: 8,
      name: "Cinturón",
      image: 'assets/cinturon.jpg',
      url: '',
      description: 'Buffway',
      size: '38',
      price: '$199'
    }
  ];
  flechaDer = "assets/flecha_derecha.png";
  constructor(private route: Router, private modalCtrl: ModalController, private cartService: CartService) { 
    this.productos();
  }

  ngOnInit() {
  }

  redirect() {
    this.route.navigate(['home']);
  }

  moda() {
    this.route.navigate(['department']);
  }

  async lanzarModal(int) {
    const myModal = await this.modalCtrl.create({
      component: ModalArticuloPage,
      backdropDismiss: true,
      showBackdrop: true,
      cssClass: 'modalArticulo',
      componentProps: this.products[int - 5]
    });

    myModal.present();
  }

  productos() {
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

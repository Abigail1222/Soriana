import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalArticuloPage } from '../modal-articulo/modal-articulo.page';
import { ModalCarritoPage } from '../modal-carrito/modal-carrito.page';
import { CartService } from '../services/cart.service';
import { Articulo2Page } from '../articulo2/articulo2.page';

@Component({
  selector: 'app-despensa',
  templateUrl: './despensa.page.html',
  styleUrls: ['./despensa.page.scss'],
})
export class DespensaPage implements OnInit {

  products = [
    {
      id: 25,
      name: "Arroz",
      image: 'assets/arroz.jpg',
      url: '',
      description: 'Verde valle',
      size: '32',
      price: '$34'
    },
    {
      id: 26,
      name: "Frijol",
      image: 'assets/frijol.jpg',
      url: '',
      description: 'Frijolin',
      size: 'L',
      price: '$39'
    },
    {
      id: 27,
      name: "Elote",
      image: 'assets/elote.jpg',
      url: '',
      description: 'La costeña',
      size: 'M',
      price: '$19'
    },
    {
      id: 28,
      name: "Champiñones",
      image: 'assets/champi.jpg',
      url: '',
      description: 'Herdez',
      size: '38',
      price: '$25'
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
      component: Articulo2Page,
      backdropDismiss: true,
      showBackdrop: true,
      cssClass: 'modalArticulo',
      componentProps: this.products[int - 25]
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

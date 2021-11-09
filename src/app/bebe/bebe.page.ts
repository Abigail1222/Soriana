import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalArticuloPage } from '../modal-articulo/modal-articulo.page';
import { ModalCarritoPage } from '../modal-carrito/modal-carrito.page';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-bebe',
  templateUrl: './bebe.page.html',
  styleUrls: ['./bebe.page.scss'],
})
export class BebePage implements OnInit {
  products = [
    {
      id: 9,
      name: "Calcetas",
      image: '../assets/calceta.jpg',
      url: '',
      description: 'Grafito',
      size: 'Recien nacido',
      price: '$59'
    },
    {
      id: 10,
      name: "Mameluco",
      image: '../assets/mameluco.jpg',
      url: '',
      description: 'Little me',
      size: '3 meses',
      price: '$399'
    },
    {
      id: 11,
      name: "Pañalero",
      image: '../assets/panalero.jpg',
      url: '',
      description: 'Bam-Bu',
      size: '6 meses',
      price: '$119'
    },
    {
      id: 12,
      name: "Moño",
      image: '../assets/mono.jpg',
      url: '',
      description: 'KidsLuxury',
      size: 'Unitalla',
      price: '$99'
    }
  ];
  flechaDer = "../assets/flecha_derecha.png";

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
      componentProps: this.products[int - 9]
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

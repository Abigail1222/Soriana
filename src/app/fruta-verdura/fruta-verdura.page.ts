import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalArticuloPage } from '../modal-articulo/modal-articulo.page';
import { ModalCarritoPage } from '../modal-carrito/modal-carrito.page';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-fruta-verdura',
  templateUrl: './fruta-verdura.page.html',
  styleUrls: ['./fruta-verdura.page.scss'],
})
export class FrutaVerduraPage implements OnInit {

  products = [
    {
      id: 33,
      name: "Tomate",
      image: '../assets/tomate.jpg',
      url: '',
      description: 'Soriana',
      size: '32',
      price: '$44kg'
    },
    {
      id: 34,
      name: "Cebolla",
      image: '../assets/cebolla.jpg',
      url: '',
      description: 'Soriana',
      size: 'L',
      price: '$11kg'
    },
    {
      id: 35,
      name: "Manzana roja",
      image: '../assets/manzana.jpg',
      url: '',
      description: 'Soriana',
      size: 'M',
      price: '$42kg'
    },
    {
      id: 36,
      name: "Platano Chiapas",
      image: '../assets/platano.jpg',
      url: '',
      description: 'Soriana',
      size: '38',
      price: '$10kg'
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
      componentProps: this.products[int - 33]
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

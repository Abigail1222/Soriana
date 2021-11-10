import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalArticuloPage } from '../modal-articulo/modal-articulo.page';
import { ModalCarritoPage } from '../modal-carrito/modal-carrito.page';
import { CartService } from '../services/cart.service';
import { Articulo2Page } from '../articulo2/articulo2.page';

@Component({
  selector: 'app-farmacia',
  templateUrl: './farmacia.page.html',
  styleUrls: ['./farmacia.page.scss'],
})
export class FarmaciaPage implements OnInit {

  products = [
    {
      id: 29,
      name: "Hisopos",
      image: '../assets/hisopo.jpg',
      url: '',
      description: 'Medimart',
      size: '32',
      price: '$24'
    },
    {
      id: 30,
      name: "Alcohol etílico",
      image: '../assets/alcohol.jpg',
      url: '',
      description: 'Jaloma',
      size: 'L',
      price: '$29'
    },
    {
      id: 31,
      name: "Agua oxigenada",
      image: '../assets/oxi.jpg',
      url: '',
      description: 'Alcofarma',
      size: 'M',
      price: '$19'
    },
    {
      id: 32,
      name: "Torundas",
      image: '../assets/torunda.jpg',
      url: '',
      description: 'Medimart',
      size: '38',
      price: '$42'
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
      component: Articulo2Page,
      backdropDismiss: true,
      showBackdrop: true,
      cssClass: 'modalArticulo',
      componentProps: this.products[int - 29]
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

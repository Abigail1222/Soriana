import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalArticuloPage } from '../modal-articulo/modal-articulo.page';
import { ModalCarritoPage } from '../modal-carrito/modal-carrito.page';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-joyeria',
  templateUrl: './joyeria.page.html',
  styleUrls: ['./joyeria.page.scss'],
})
export class JoyeriaPage implements OnInit {
  products = [
    {
      id: 13,
      name: "Aretes Esfera",
      image: 'assets/arete.jpg',
      url: '',
      description: 'Fraiche',
      size: 'Unitalla',
      price: '$117'
    },
    {
      id: 14,
      name: "Collar perlas",
      image: 'assets/collar.jpg',
      url: '',
      description: 'Eva',
      size: 'Unitalla',
      price: '$449'
    },
    {
      id: 15,
      name: "Reloj",
      image: 'assets/reloj.jpg',
      url: '',
      description: 'CURREN',
      size: 'Unitalla',
      price: '$739'
    },
    {
      id: 16,
      name: "Anillo",
      image: 'assets/anillo.jpg',
      url: '',
      description: 'Her',
      size: 'CH',
      price: '$79'
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
      componentProps: this.products[int - 13]
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

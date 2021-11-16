import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalArticuloPage } from '../modal-articulo/modal-articulo.page';
import { ModalCarritoPage } from '../modal-carrito/modal-carrito.page';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-zapatos',
  templateUrl: './zapatos.page.html',
  styleUrls: ['./zapatos.page.scss'],
})
export class ZapatosPage implements OnInit {
  products = [
    {
      id: 17,
      name: "Tenis",
      image: '../assets/tenis.jpg',
      url: '',
      description: 'Charly',
      size: '9',
      price: '$459'
    },
    {
      id: 18,
      name: "Tacón",
      image: '../assets/tacon.jpg',
      url: '',
      description: 'Spring',
      size: '26',
      price: '$449'
    },
    {
      id: 19,
      name: "Zapato hombre",
      image: '../assets/zapato.jpg',
      url: '',
      description: 'Privalia',
      size: '8',
      price: '$639'
    },
    {
      id: 20,
      name: "Chancla playa",
      image: '../assets/chancla.jpg',
      url: '',
      description: 'Summer',
      size: '7',
      price: '$89'
    }
  ]
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
      componentProps: this.products[int - 17]
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

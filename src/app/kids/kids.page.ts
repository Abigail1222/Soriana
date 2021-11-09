import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalArticuloPage } from '../modal-articulo/modal-articulo.page';
import { ModalCarritoPage } from '../modal-carrito/modal-carrito.page';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.page.html',
  styleUrls: ['./kids.page.scss'],
})
export class KidsPage implements OnInit {

  products = [
    {
      id: 21,
      name: "Sudadera",
      image: '../assets/sudadera.jpg',
      url: '',
      description: 'Piru',
      size: '14',
      price: '$259'
    },
    {
      id: 22,
      name: "Playera",
      image: '../assets/thing.jpg',
      url: '',
      description: 'Sibuts',
      size: '12',
      price: '$249'
    },
    {
      id: 23,
      name: "Impermeable",
      image: '../assets/impermeable.png',
      url: '',
      description: 'Peques',
      size: '2 a 3 años',
      price: '$439'
    },
    {
      id: 24,
      name: "Vestido",
      image: '../assets/vestido.jpg',
      url: '',
      description: 'Up',
      size: '3 años',
      price: '$279'
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

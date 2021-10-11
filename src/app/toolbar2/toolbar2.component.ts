import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { MenuController, ModalController } from '@ionic/angular';
import { ModalCarritoPage } from '../modal-carrito/modal-carrito.page';
@Component({
  selector: 'app-toolbar2',
  templateUrl: './toolbar2.component.html',
  styleUrls: ['./toolbar2.component.scss'],
})
export class Toolbar2Component implements OnInit {
  sorianaLogo = "../assets/soriana-logo.png";
  constructor(private route:Router, private modalCtrl: ModalController, private menuCtrl: MenuController) { }

  ngOnInit() {}

  redirect(){
    this.route.navigate(['home']);
  }

  login(){
    this.route.navigate(['login']);
  }

  toggleMenu() {
    this.menuCtrl.toggle();
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

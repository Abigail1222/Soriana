import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';
import { ModalCarritoPage } from '../modal-carrito/modal-carrito.page';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {

  sorianaLogo = "../assets/soriana-logo.png";
  constructor(private route:Router, private modalCtrl: ModalController, private menuCtrl: MenuController) { }

  ngOnInit() {}

  redirect(){
    this.route.navigate(['home']);
  }

  login(){
    this.route.navigate(['login']);
  }

  compra(){
    this.route.navigate(['compra']);
    this.modalCtrl.dismiss();
  }

  toggleMenu() {
    this.menuCtrl.toggle('principal');
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


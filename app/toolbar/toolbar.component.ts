import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';
import { ModalCarritoPage } from '../modal-carrito/modal-carrito.page';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {

  sorianaLogo = "../assets/soriana-logo.png";
  constructor(private route:Router, private authSvc: AuthService, private modalCtrl: ModalController, private menuCtrl: MenuController) { }

  ngOnInit() {}

  

  redirect(){
    this.route.navigate(['home']);
  }

  login(){
    var bandera = this.authSvc.getBandera();
    if(bandera==0) {
      this.route.navigate(['login']); 
    }
    if(bandera == 1){
      this.route.navigate(['cuenta']);
    }
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


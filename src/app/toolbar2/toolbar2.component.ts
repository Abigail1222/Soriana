import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { MenuController, ModalController } from '@ionic/angular';
import { ModalCarritoPage } from '../modal-carrito/modal-carrito.page';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-toolbar2',
  templateUrl: './toolbar2.component.html',
  styleUrls: ['./toolbar2.component.scss'],
})
export class Toolbar2Component implements OnInit {
  sorianaLogo = "assets/soriana-logo.png";
  constructor(private route:Router, private modalCtrl: ModalController, private menuCtrl: MenuController, private authSvc: AuthService) { }

  ngOnInit() {}

  redirect(){
    this.route.navigate(['home']);
  }

  login(){
    let bandera = this.authSvc.getBandera();
    if(bandera==0) {
      this.route.navigate(['login']); 
    }
    if(bandera == 1){
      this.route.navigate(['cuenta']);
    }
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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-carrito',
  templateUrl: './modal-carrito.page.html',
  styleUrls: ['./modal-carrito.page.scss'],
})
export class ModalCarritoPage implements OnInit {

  constructor(private modalCtrl: ModalController, private route:Router) { }

  ngOnInit() {
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

  compra(){
    this.route.navigate(['compra']);
  }
}

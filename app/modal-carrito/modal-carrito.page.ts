import { ChangeDetectorRef, Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-modal-carrito',
  templateUrl: './modal-carrito.page.html',
  styleUrls: ['./modal-carrito.page.scss'],
})
export class ModalCarritoPage implements OnInit {
  items = this.cartService.getItems();
  subtotal = this.cartService.getSubtotal().toString();
  total = this.cartService.getTotal();

  constructor(private authSvc: AuthService, private cdr: ChangeDetectorRef, private modalCtrl: ModalController, private route:Router, private cartService: CartService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
  
  cerrar() {
    this.modalCtrl.dismiss();
  }

  compra(){
    let number = this.cartService.getNumberItems();
    let estatus = this.authSvc.getEstatusLogin();
    if(number > 0 && estatus == true ) {
      this.route.navigate(['compra']);
      this.modalCtrl.dismiss();
    }
    if(number == 0 && estatus == true ) {
      window.alert("El carrito está vacío");
    }
    if(number == 0 && estatus == false ) {
      window.alert("El carrito está vacío y debe iniciar sesión");
    }
    if(number > 0 && estatus == false ) {
      window.alert("Debe iniciar sesión");
      this.modalCtrl.dismiss();
      this.route.navigate(['login']);
    }
  }

  actualizar(){
    this.subtotal = this.cartService.getSubtotal().toString();
    this.total = this.cartService.getSubtotal()+49;
  }

  eliminar() {
    let number = this.cartService.getNumberItems();
    if(number > 0) {
      this.cartService.emptyCart();
      this.actualizar();
    }
    else {
      window.alert("El carrito esta vacio");
    }
  }

  deleteProduct(id: any) {
    this.cartService.removeProduct(id);
    this.actualizar();
    
  }
}

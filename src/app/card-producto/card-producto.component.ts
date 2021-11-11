import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ModalCarritoPage } from '../modal-carrito/modal-carrito.page';

@Component({
  selector: 'app-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.scss'],
})
export class CardProductoComponent implements OnInit {
  blusa_rosa = "../assets/blusa_rosa.jpg";
  items = this.cartService.getItems();
  carrito: ModalCarritoPage;
  constructor(private cartService: CartService) {
    
   }

  ngOnInit() {
  }

  deleteProduct(id: any) {
    this.cartService.removeProduct(id);
    this.carrito.actualizar();
    
  }

}

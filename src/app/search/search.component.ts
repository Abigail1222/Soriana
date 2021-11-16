import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})

export class SearchComponent implements OnInit {
  carrito = [];
  url: string;
  searchTerm: string;
  bandera: boolean = false;
  constructor(private carritoSvc: CartService, private route:Router) { }

  ngOnInit() {
    this.carrito = this.carritoSvc.getCarrito();
  }

  redirect(url) {
    this.route.navigate([url]);
  }

  update() {
    this.bandera = true;
  }

  update2() {
    this.bandera = false;
  }
}

import { Injectable } from '@angular/core';
import { Product } from '../product.js';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  hardcode = [{
    id: 1,
    name: "Blusa rosa",
    image: '../assets/blusa_rosa.jpg',
    url: '',
    description: 'Cherokee',
    size: '9',
    price: '199'
  },
  {
    id: 2,
    name: "Short",
    image: '../assets/short.jpg',
    url: '',
    description: 'LEVIS',
    size: 'M',
    price: '259'
  },
  {
    id: 3,
    name: "Zapatillas",
    image: '../assets/zapatillas.png',
    url: '',
    description: 'Flexi',
    size: '24',
    price: '239'
  },
  {
    id: 4,
    name: "Lentes",
    image: '../assets/lentes.png',
    url: '',
    description: 'Panama',
    size: 'Unitalla',
    price: '299'
  }];
  items: Product[] = [];
  subtotal: number = 0;
  constructor() { }

  addToCart(id: any) {
    this.items.push(this.hardcode[id-1]);
    this.subtotal = this.subtotal + parseFloat(this.hardcode[id-1].price);
  }

  getSubtotal() {
    return this.subtotal;
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}

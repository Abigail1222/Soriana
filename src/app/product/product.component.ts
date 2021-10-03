import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  products: any;

  constructor() {
    this.productos();
   }

  ngOnInit() {}

  productos () {
    this.products = [
      {
        name: "Blusa rosa",
        image: '../assets/blusa_rosa.jpg',
        url: '',
        description: 'Rosa palo',
        price: '$199'
      },
      {
        name: "Short",
        image: '../assets/short.jpg',
        url: '',
        description: 'LEVIS',
        price: '$259'
      },
      {
        name: "Zapatillas",
        image: '../assets/zapatillas.png',
        url: '',
        description: 'Flexi',
        price: '$239'
      },
      {
        name: "Lentes",
        image: '../assets/lentes.png',
        url: '',
        description: 'Panama',
        price: '$299'
      }
    ]
  }

}

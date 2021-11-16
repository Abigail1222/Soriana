import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.page.html',
  styleUrls: ['./compra.page.scss'],
})
export class CompraPage implements OnInit {

  flechaDer = "assets/flecha_derecha.png";
  blusa_rosa = "assets/blusa_rosa.jpg";
  products: any;
  show: boolean = true;
  constructor(private route:Router) { 
    this.productos();
  }

  ngOnInit() {
  }

  redirect(){
    this.route.navigate(['home']);
  }

  proceso(){
    this.route.navigate(['proceso']);
  }

  productos () {
    this.products = [
      {
        name: "Blusa rosa",
        image: 'assets/blusa_rosa.jpg',
        url: '',
        description: 'Rosa palo',
        price: '$199'
      },
      {
        name: "Short",
        image: 'assets/short.jpg',
        url: '',
        description: 'LEVIS',
        price: '$259'
      },
      {
        name: "Zapatillas",
        image: 'assets/zapatillas.png',
        url: '',
        description: 'Flexi',
        price: '$239'
      },
      {
        name: "Lentes",
        image: 'assets/lentes.png',
        url: '',
        description: 'Panama',
        price: '$299'
      }
    ]
  }
}

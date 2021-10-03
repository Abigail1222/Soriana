import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {

  despensa = "../assets/despensa.jpg";
  flechaIzq = "../assets/flecha_izquierda.png";
  flechaDer = "../assets/flecha_derecha.png";
  departamentos: any;
  servicios: any;

  constructor(private route:Router) { 
    this.departamentosMenu();
    this.serviciosMenu();
  }

  ngOnInit() {}

  departamentosMenu () {
    this.departamentos = [
      {
        name: "Despensa",
        image: '../assets/despensa.jpg',
        url: ''
      },
      {
        name: "Frutas y Verduras",
        image: '../assets/frutas.jpg',
        url: ''
      },
      {
        name: "Moda y Accesorios",
        image: '../assets/ropa.jpg',
        url: 'department'
      },
      {
        name: "Farmacia",
        image: '../assets/farmacia.jpg',
        url: ''
      }
    ]
  }

  serviciosMenu () {
    this.servicios = [
      {
        name: "Facturación Electrónica",
        image: '../assets/factura.jpg',
      },
      {
        name: "Tarjeta Falabella",
        image: '../assets/falabella.jpg',
      },
      {
        name: "Pago de Servicios",
        image: '../assets/pago.jpg',
      },
      {
        name: "Consultorio Médico",
        image: '../assets/medico.jpg',
      }
    ]
  }

  info(menu){
    this.route.navigate([menu.url]);
  }
}

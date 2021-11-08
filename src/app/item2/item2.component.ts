import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item2',
  templateUrl: './item2.component.html',
  styleUrls: ['./item2.component.scss'],
})
export class Item2Component implements OnInit {

  despensa = "../assets/despensa.jpg";
  flechaIzq = "../assets/flecha_izquierda.png";
  flechaDer = "../assets/flecha_derecha.png";
  flecha = "../assets/flecha.png";
  fila1: any;
  fila2: any;

  constructor(private route:Router) { 
    this.filaPrimera();
    this.filaSegunda();
  }

  ngOnInit() {}

  filaPrimera () {
    this.fila1 = [
      {
        name: "Bebe",
        image: '../assets/bebes.jpg',
        url: 'lady'
      },
      {
        name: "Caballero",
        image: '../assets/caballero.jpg',
        url: ''
      },
      {
        name: "Zapatos",
        image: '../assets/zapatos.jpg',
        url: ''
      }
    ]
  }

  filaSegunda () {
    this.fila2 = [
      {
        name: "Niños",
        image: '../assets/niños.jpg',
      },
      {
        name: "Dama",
        image: '../assets/dama.jpg',
        url: 'lady'
      },
      {
        name: "Joyería",
        image: '../assets/joyeria.jpg',
      }
    ]
  }

  info(menu){
    console.log(menu);
    this.route.navigate([menu.url]);
  }
}
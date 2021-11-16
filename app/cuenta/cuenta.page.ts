import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {
  show: boolean = true;
  pedidos: any;
  direcciones: any;
  constructor(private authSvc: AuthService, private route:Router ) {
    this.pedidosMostrar();
    this.direccionesMostrar();
  }

  ngOnInit() {
  }

  pedidosMostrar(){
    this.pedidos=[{
      name: "25/09/21",
      direccion: "Casa",
      total: '$889.65'
    },
    {
      name: "2/10/21",
      direccion: "Trabajo",
      total: '$265.23'
    }]
  }

  direccionesMostrar(){
    this.direcciones=[{
      name: "Casa",
      calle: "Benito Juárez",
      numero: "227",
      colonia: "Centro",
      codigo_postal: "66420",
      municipio: "San Nicolás",
      estado: "Nuevo León"
    },
    {
      name: "Trabajo",
      calle: "Vicente Guerrero",
      numero: "334",
      colonia: "Girasoles",
      codigo_postal: "67755",
      municipio: "Monterrey",
      estado: "Nuevo León"
    },
  ]
  }
  
  cerrarSesion(){
    var answer = window.confirm("¿Está seguro de querer salir?");
    if (answer) {
      this.authSvc.logout();
      this.route.navigate(['home']);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-metodo',
  templateUrl: './metodo.page.html',
  styleUrls: ['./metodo.page.scss'],
})
export class MetodoPage implements OnInit {
  flechaDer = "../assets/flecha_derecha.png";
  constructor(private route:Router) { }

  ngOnInit() {
  }

  redirect() {
    this.route.navigate(['home']);
  }
  
  promocion(tarjeta,nombre,fecha,cvv,direccion) {
    if(tarjeta && nombre && fecha && cvv && direccion){
      this.route.navigate(['promocion']);
    }
    else {
      alert('Por favor llene todos los campos');
    }
    
  }
}

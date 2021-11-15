import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proceso',
  templateUrl: './proceso.page.html',
  styleUrls: ['./proceso.page.scss'],
})
export class ProcesoPage implements OnInit {
  flechaDer = "../assets/flecha_derecha.png";
  dia: string;
  hora: string = undefined;
  constructor(private route:Router) { }

  ngOnInit() {
  }
  storeHora(event) {
    this.hora = event.detail.value;
  }

  storeDia(event) {
    this.dia = event.detail.value;
  }
  redirect(){
    this.route.navigate(['home']);
  }

  metodo(direccion, numero, numero_int, referencias, telefono, calle, cp, estado, municipio) {
    if(this.hora && this.dia && direccion && numero && numero_int && referencias && telefono && calle && cp && estado && municipio) {
      if(isNaN(numero)==true){
        alert('Por favor inserte solamente numeros en el numero exterior');
      }
      if(isNaN(numero_int)==true){
        alert('Por favor inserte solamente numeros en el numero interior');
      }
      if(isNaN(telefono)==true || telefono.length !== 10){
        alert('Por favor ingrese correctamente el numero de telefono a diez digitos');
      }

      if(isNaN(cp)==true || cp.length !== 5){
        alert('Por favor ingrese correctamente el codigo postal a 5 digitos');
      }

      if(isNaN(cp)==false && cp.length == 5 && isNaN(telefono)==false && telefono.length == 10 && isNaN(numero_int)==false && isNaN(numero)==false) {
        this.route.navigate(['metodo']);
      }
      
    }
    else {
      window.alert('Por favor llene todos los campos');
    }
    
    
    
  }

}

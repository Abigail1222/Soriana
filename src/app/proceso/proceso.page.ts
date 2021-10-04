import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proceso',
  templateUrl: './proceso.page.html',
  styleUrls: ['./proceso.page.scss'],
})
export class ProcesoPage implements OnInit {
  flechaDer = "../assets/flecha_derecha.png";
  constructor(private route:Router) { }

  ngOnInit() {
  }

  redirect(){
    this.route.navigate(['home']);
  }

  metodo() {
    this.route.navigate(['metodo']);
  }

}

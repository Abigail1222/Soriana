import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-promocion',
  templateUrl: './promocion.page.html',
  styleUrls: ['./promocion.page.scss'],
})
export class PromocionPage implements OnInit {
  flechaDer = "../assets/flecha_derecha.png";
  constructor(private route:Router) { }

  ngOnInit() {
  }

  resumen() {
    this.route.navigate(['resumen']);
  }
}

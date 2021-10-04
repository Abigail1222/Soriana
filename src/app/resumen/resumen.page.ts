import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.page.html',
  styleUrls: ['./resumen.page.scss'],
})
export class ResumenPage implements OnInit {
  flechaDer = "../assets/flecha_derecha.png";
  constructor(private route:Router) { }

  ngOnInit() {
  }

  confirmacion() {
    this.route.navigate(['confirmacion']);
  }

}

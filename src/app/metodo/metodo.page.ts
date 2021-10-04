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

  promocion() {
    this.route.navigate(['promocion']);
  }
}

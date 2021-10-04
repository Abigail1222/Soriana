import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.page.html',
  styleUrls: ['./confirmacion.page.scss'],
})
export class ConfirmacionPage implements OnInit {

  constructor(private route:Router) { }
  flechaDer = "../assets/flecha_derecha.png";
  ngOnInit() {
  }

  redirect() {
    this.route.navigate(['home']);
  }
}

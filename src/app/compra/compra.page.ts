import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.page.html',
  styleUrls: ['./compra.page.scss'],
})
export class CompraPage implements OnInit {

  flechaDer = "../assets/flecha_derecha.png";
  constructor(private route:Router) { }

  ngOnInit() {
  }

  redirect(){
    this.route.navigate(['home']);
  }
}

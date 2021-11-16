import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lady',
  templateUrl: './lady.page.html',
  styleUrls: ['./lady.page.scss'],
})
export class LadyPage implements OnInit {

  flechaDer = "assets/flecha_derecha.png";
  constructor(private route:Router) { }

  ngOnInit() {
  }

  redirect(){
    this.route.navigate(['home']);
  }

  moda(){
    this.route.navigate(['department']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-toolbar2',
  templateUrl: './toolbar2.component.html',
  styleUrls: ['./toolbar2.component.scss'],
})
export class Toolbar2Component implements OnInit {
  sorianaLogo = "../assets/soriana-logo.png";
  constructor(private route:Router) { }

  ngOnInit() {}

  redirect(){
    this.route.navigate(['home']);
  }

  login(){
    this.route.navigate(['login']);
  }

}

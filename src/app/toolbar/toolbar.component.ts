import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {

  sorianaLogo = "../assets/soriana-logo.png";
  constructor(private route:Router) { }

  ngOnInit() {}

  redirect(){
    this.route.navigate(['home']);
  }

  login(){
    this.route.navigate(['login']);
  }

  compra(){
    this.route.navigate(['compra']);
  }
}


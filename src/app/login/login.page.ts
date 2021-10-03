import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  show: boolean = true;
  constructor(private route:Router) { }

  ngOnInit() {
  }

  cuenta() {
    this.route.navigate(['cuenta']);
  }

}

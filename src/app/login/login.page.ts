import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  show: boolean = true;
  constructor(private route:Router, private authSvc: AuthService) { }

  ngOnInit() {
  }

  cuenta() {
    this.route.navigate(['cuenta']);
  }

  async onRegister(email, password) {
    try {
      const user = await this.authSvc.register(email, password);
      if (user) {
        console.log('user: ', user);
        
      }
    } catch (error) {
      console.log('Error', error);
    }
  }

  async onLogin(email, password) {
    try {
      const user = await this.authSvc.login(email, password);
      if (user) {
        console.log('user: ', user);
        
      }
    } catch (error) {
      console.log('Error', error);
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  show: boolean = true;
  constructor(private route:Router, private authSvc: AuthService,  private userService: UserService) { }

  ngOnInit() {
  }

  cuenta() {
    this.route.navigate(['cuenta']);
  }

  recuperacion() {
    this.route.navigate(['recuperacion']);
  }

  async onRegister(email, password) {
    try {
      const user = await this.authSvc.register(email, password);
      if (user) {
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
        
      }
    } catch (error) {
      console.log('Error', error);
    }
  }

  addUsers(name, password, first_lastname, second_lastname, password_conf, phone, email, email_conf, postal ) {
    this.userService.addUser(name, password, first_lastname, second_lastname, password_conf, phone, email, email_conf, postal);
  }

  async onLogin(email, password) {
    try {
      const user = await this.authSvc.login(email, password);
      if (user) {
        
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
  
        console.log('user: ', user);
        
      }
      else {
        window.alert('Uno o más datos son incorrectos');
      }
    } catch (error) {
      
      console.log('Error', error);
      
    }
  }

  private redirectUser(isVerified: boolean) {
    if(isVerified) {
      this.route.navigate(['cuenta']);
    }
    else {
      this.route.navigate(['verificacion']);
    }
  }
}

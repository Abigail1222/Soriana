import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-recuperacion',
  templateUrl: './recuperacion.page.html',
  styleUrls: ['./recuperacion.page.scss'],
})
export class RecuperacionPage implements OnInit {

  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit() {
  }

  
  async onResetPassword(email) {
    try {
      await this.authSvc.resetPassword(email);
      this.router.navigate(['login']);
    } catch (error) {
      console.log('Error->', error);
    }
  }

}

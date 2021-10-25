import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { User } from '../shared/user.interface';

@Component({
  selector: 'app-verificacion',
  templateUrl: './verificacion.page.html',
  styleUrls: ['./verificacion.page.scss'],
})
export class VerificacionPage implements OnInit {
  user$: Observable<User> = this.authSvc.afAuth.user;
  constructor(private authSvc: AuthService) {}

  ngOnInit() {
  }
  
  async onSendEmail(): Promise<void> {
    try {
      await this.authSvc.sendVerificationEmail();
    } catch (error) {
      console.log('Error->', error);
    }
  }

  ngOnDestroy(): void {
    this.authSvc.logout();
  }
}

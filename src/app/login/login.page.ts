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
  privacidad = false;
  postalApprove = false;
  phoneApprove = false;
  email: string;
  email2: string;
  password2: string;
  name: string;
  password: string;
  first_lastname: string;
  password_conf: string;
  second_lastname: string;
  phone: string;
  postal: string;
  email_conf: string;
  constructor(private route:Router, private authSvc: AuthService,  private userService: UserService) { }

  ngOnInit() {
  }

  cuenta() {
    this.route.navigate(['cuenta']);
  }

  recuperacion() {
    this.route.navigate(['recuperacion']);
  }

  isChecked(event) {
    if ( event.detail.checked ) {
      this.privacidad = true;
   }
  }
  confirmaciones(email, password, password_conf, email_conf, phone, postal, name, first_lastname, second_lastname) {
    let requeridas;
    if(email && password && password_conf && email_conf && phone && postal && name && first_lastname && second_lastname) {
      requeridas = true;
    }
    else {
      window.alert('Falta uno o más datos de llenar');
    }
    
    if(requeridas){
      var phonecorrect = isNaN(phone);
      var postalcorrect = isNaN(postal); 
      if (phonecorrect == true) {
        window.alert('El telefono debe contener solo numeros')
      }
      
      if ( phonecorrect == false) {
        if (phone.length != 10) {
          window.alert('El telefono debe ser a diez digitos')
        }
        else {
          this.phoneApprove = true;
        }
      }

      if (postalcorrect == true) {
        window.alert('El codigo postal debe contener solo numeros')
      }

      if (postalcorrect == false) {
        if (postal.length != 5) {
          window.alert('El codigo postal debe contener 5 digitos')
        }
        else {
          this.postalApprove = true;
        }
      }

      if (this.privacidad == false) {
        window.alert('Por favor acepte los terminos y condiciones');
      }
      if(password === password_conf && email === email_conf && this.privacidad == true && this.postalApprove == true && this.phoneApprove == true) {
        this.onRegister(email, password);
      }
      if(password !== password_conf) {
        window.alert('Las contraseñas no son iguales');
      }
      if(email !== email_conf) {
        window.alert('Las direcciones de correo no son iguales');
      }
    }

  }

  async onRegister(email, password) {
    try {
      const user = await this.authSvc.register(email, password);
      if (user) {
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
        
      }
      else {
        window.alert('Hay un error en el formato de sus datos')
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

import { Injectable } from '@angular/core';
import { Client } from '../client.js';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  clients: Client[] = [];
  constructor() { }

  addUser(name: string, password: string, first_lastname: string, second_lastname: string, password_conf: string, phone: string, email: string, email_conf: string, postal: string ) {
    this.clients.push();
  }
}

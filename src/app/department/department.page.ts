import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.page.html',
  styleUrls: ['./department.page.scss'],
})
export class DepartmentPage implements OnInit {

  flechaDer = "assets/flecha_derecha.png";

  constructor(private route:Router) { }

  ngOnInit() {
  }

  redirect(){
    this.route.navigate(['home']);
  }

  redirect2(){
    this.route.navigate(['lady']);
  }

}

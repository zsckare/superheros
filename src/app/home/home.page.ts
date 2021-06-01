import { Component } from '@angular/core';
import {Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  goto(){
    let sesion = localStorage.getItem("sesion")
    if(sesion){
      this.router.navigate(['welcome'])
    }else{
      this.router.navigate(['registro'])
    }
  }
}

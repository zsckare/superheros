import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { DatabaseService} from '../services/database.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  nombre:'';
  correo:'';
  genero:'';

  constructor(private router: Router, private dbService: DatabaseService) {}

  ngOnInit() {
  }

  registro(){
    this.dbService.addUser(this.nombre,this.correo,this.genero).then((res)=>{
      localStorage.setItem("sesion","1")
      this.router.navigate(['welcome'])
    })
    
  }
}

import { Component } from '@angular/core';
import {Router } from '@angular/router';
import { DatabaseService} from '../services/database.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router,private dbService: DatabaseService) {}

  ngOnInit(){
    this.dbService.dbState().subscribe((res) => {
      if(res){
        this.dbService.fetchUsers().subscribe(item => {      
        })
      }
    });    
  }
  goto(){

    let sesion = localStorage.getItem("sesion")
    if(sesion){
      this.router.navigate(['welcome'])
    }else{
      this.router.navigate(['registro'])
    }
  }
}

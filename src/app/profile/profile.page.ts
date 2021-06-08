import { Component, OnInit } from '@angular/core';
import { DatabaseService} from '../services/database.service';

import { Router, NavigationExtras } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private dbService: DatabaseService,private router: Router) { 

  }
  data :  any[] = []
  info:any;
  ngOnInit() {
    this.dbService.dbState().subscribe((res) => {
      if(res){
        this.dbService.fetchUsers().subscribe(item => {
          this.data = item          
          this.info = JSON.parse(JSON.stringify(this.data))          
        })
      }
    });  
  }


  editarPerfil(){
    let navigationExtras: NavigationExtras = {
      state: {
        special: JSON.stringify(this.data[0])
      }
    };
    console.log(navigationExtras)
    this.router.navigate(['editprofile'], navigationExtras);
  }
}

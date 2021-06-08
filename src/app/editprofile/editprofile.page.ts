import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService} from '../services/database.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {

  data:any;
  constructor(private route: ActivatedRoute, private router: Router, private dbService: DatabaseService,private navCtrl: NavController) {
    console.log("CARGANDO")
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = JSON.parse(this.router.getCurrentNavigation().extras.state.special);
        
        console.log(this.data)
        console.log("CARGADO")
      }
    });
  }
  
  ngOnInit() {
  }


  save(){
    this.dbService.updateUser(this.data.id,this.data).then((res)=>{
      this.navCtrl.pop()
    })
  }
}

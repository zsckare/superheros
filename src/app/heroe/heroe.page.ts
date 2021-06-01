import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.page.html',
  styleUrls: ['./heroe.page.scss'],
})
export class HeroePage implements OnInit {

  data: any;
  title:''
  constructor(private route: ActivatedRoute, private router: Router) {
    console.log("CARGANDO")
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = JSON.parse(this.router.getCurrentNavigation().extras.state.special);
        this.title = this.data.name
        console.log(this.data)
        console.log("CARGADO")
      }
    });

   
  }

  ngOnInit() {
  }

}

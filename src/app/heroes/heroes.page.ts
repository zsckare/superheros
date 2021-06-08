import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({

  selector: 'app-heroes',
  templateUrl: './heroes.page.html',
  styleUrls: ['./heroes.page.scss'],
})
export class HeroesPage implements OnInit {

  heroes =  []
  constructor(private router: Router,private route: ActivatedRoute, ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.heroes = JSON.parse(this.router.getCurrentNavigation().extras.state.special);
        
      }
    });
   }

  ngOnInit() {
    
  
  }

  goToHero(hero){
    let navigationExtras: NavigationExtras = {
      state: {
        special: JSON.stringify(hero)
      }
    };
    console.log(navigationExtras)
    this.router.navigate(['heroe'], navigationExtras);
  }
  
}

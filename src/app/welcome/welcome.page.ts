import { Component, OnInit } from '@angular/core';

import { Router, NavigationExtras } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  dc = [
    {
      name:'Acertijo',
      fullName:'Edward "Eddie" Nashton',
      firstAppearance:'Detective Comics Nº 140 ',
      groupAffiliation:'Sociedad Secreta de Supervillanos',
      image:'../../assets/dc/acertijo.jpg',
      video:'../../assets/videos/dc/acertijo.mp4',

    },
    {
      name:'Aquaman',
      fullName:'Arthur Curry',
      firstAppearance:'More Fun Comics, #73 ',
      groupAffiliation:'Liga de la Justicia',
      image:'../../assets/dc/aquaman.jpg',
      video:'../../assets/dc/aquaman.mp4',

    },
    {
      name:'Batgirl',
      fullName:'Barbara Gordon',
      firstAppearance:'Batman Nº 139',
      groupAffiliation:'',
      image:'../../assets/dc/batgirl.jpg',
      video:'../../assets/dc/batgirl.mp4',

    },
    {
      name:'Batman',
      fullName:'Bruce Wayne ',
      firstAppearance:'Detective Comics N.º 27',
      groupAffiliation:'Liga de la Justicia',
      image:'../../assets/dc/batman.jpg',
      video:'../../assets/dc/batman.mp4',

    },
    {
      name:'Cyborg',
      fullName:'Victor Stone',
      firstAppearance:'DC Comics Presents #26 ',
      groupAffiliation:'Liga de la Justicia',
      image:'../../assets/dc/cyborg.jpg',
      video:'../../assets/dc/cyborg.mp4',

    },
    {
      name:'Darkseid',
      fullName:'',
      firstAppearance:'Superman Pal Jimmy Olsen #134',
      groupAffiliation:'Sociedad Secreta de Súper Villanos',
      image:'../../assets/dc/darksaid.jpg',
      video:'../../assets/dc/darksaid.mp4',

    },
    {
      name:'Deathstroke',
      fullName:'Slade Joseph Wilson',
      firstAppearance:'The New Teen Titans (Vol. 1)N.º 2 ',
      groupAffiliation:'Escuadrón Suicida',
      image:'../../assets/dc/deathstroke.jpg',
      video:'../../assets/dc/deathstroke.mp4',

    },
    {
      name:'Detective Marciano',
      fullName:"J'onn J'onzz",
      firstAppearance:'Detective Comics N.º 225',
      groupAffiliation:'Liga de la Justicia',
      image:'../../assets/dc/detectivemarciano.jpg',
      video:'../../assets/dc/detectivemarciano.mp4',

    },
    {
      name:'Flash',
      fullName:'Barry Allen',
      firstAppearance:'Showcase #4',
      groupAffiliation:'Liga de la Justicia',
      image:'../../assets/dc/flash.jpg',
      video:'../../assets/dc/flash.mp4',

    },
    {
      name:'Flecha verde',
      fullName:'Oliver Jonas Queen',
      firstAppearance:'More Fun Comics N°73 ',
      groupAffiliation:'Liga de la Justicia',
      image:'../../assets/dc/flechaverde.jpg',
      video:'../../assets/dc/flechaverde.mp4',

    },
    {
      name:'Gatubela',
      fullName:' Selina Kyle',
      firstAppearance:'Batman Nº 1',
      groupAffiliation:'Liga de la Justicia',
      image:'../../assets/dc/gatubela.jpg',
      video:'../../assets/dc/gatubela.mp4',

    },
    {
      name:'Harley Quinn',
      fullName:'Harleen Frances Quinzel',
      firstAppearance:'Batman: la serie animada Episodio n°. 22:',
      groupAffiliation:'Escuadron Suicida',
      image:'../../assets/dc/harleyqueen.jpg',
      video:'../../assets/dc/harleyqueen.mp4',

    },
    {
      name:'Hiedra Venenosa ',
      fullName:'Pamela Lilian Isley',
      firstAppearance:'Batman Nº 181',
      groupAffiliation:'Sociedad Secreta de Super Villanos',
      image:'../../assets/dc/hiedravenenosa.jpg',
      video:'../../assets/dc/hiedravenenosa.mp4',

    },
    {
      name:'Joker',
      fullName:'',
      firstAppearance:'Batman Nº 1',
      groupAffiliation:'Escuadron Suicida',
      image:'../../assets/dc/joker.jpg',
      video:'../../assets/dc/joker.mp4',

    },
    {
      name:'Linterna Verde',
      fullName:'Hal Jordan',
      firstAppearance:'Showcase #22',
      groupAffiliation:'Liga de la Justicia',
      image:'../../assets/dc/linternaverde.jpg',
      video:'../../assets/dc/linternaverde.mp4',

    },
    {
      name:'Pinguino',
      fullName:'Oswald Chesterfield Cobblepot',
      firstAppearance:'Detective Comics #58 ',
      groupAffiliation:'Liga de la injusticia',
      image:'../../assets/dc/pinguino.jpg',
      video:'../../assets/dc/pinguino.mp4',

    },
    {
      name:'Robin',
      fullName:'Dick Grayson',
      firstAppearance:'Detective Comics #38 ',
      groupAffiliation:'Teen Titans',
      image:'../../assets/dc/robin.jpg',
      video:'../../assets/dc/robin.mp4',

    },
    {
      name:'Shazam',
      fullName:'William Joseph "Billy" Batson',
      firstAppearance:'Whiz Comics #2 ',
      groupAffiliation:'Familia Marvel',
      image:'../../assets/dc/shazam.jpg',
      video:'../../assets/dc/shazam.mp4',

    },
    {
      name:'Supergirl',
      fullName:'Kara Zor-El',
      firstAppearance:' Action Comics N° 252',
      groupAffiliation:'',
      image:'../../assets/dc/supergirl.jpg',
      video:'../../assets/dc/supergirl.mp4',

    },
    {
      name:'Superman',
      fullName:'Kal-EL',
      firstAppearance:'Action Comics #1 ',
      groupAffiliation:'Liga de la Justicia',
      image:'../../assets/dc/superman.jpg',
      video:'../../assets/dc/superman.mp4',

    },
    {
      name:'Wonder Woman',
      fullName:' Diana de Temiscira',
      firstAppearance:'All Star Comics #8',
      groupAffiliation:'Liga de la Justicia',
      image:'../../assets/dc/wonderwoman.jpg',
      video:'../../assets/dc/wonderwoman.mp4',

    },


  ];

  marvel = [
    {
      name:'AntMan',
      fullName:'Scott Lang',
      firstAppearance:'Tales to Astonish # 27 ',
      groupAffiliation:'Los Vengadores',
      image:'../../assets/marvel/antman.jpg',
      video:'../../assets/marvel/antman.mp4',

    },

    {
      name:'Black Panther',
      fullName:"T'Challa",
      firstAppearance:'The Fantastic Four N.º 52 ',
      groupAffiliation:'Los Vengadores',
      image:'../../assets/marvel/blackpanther.jpg',
      video:'../../assets/marvel/blackpanther.mp4',

    },
    {
      name:'Capitan America',
      fullName:' Steven Grant Rogers',
      firstAppearance:' Captain America Comics #1',
      groupAffiliation:'Los Vengadores',
      image:'../../assets/marvel/capitanamerica.jpg',
      video:'../../assets/marvel/capitanamerica.mp4',

    },
    {
      name:'Daredevil',
      fullName:' Matthew Michael "Matt" Murdock',
      firstAppearance:' Daredevil #1',
      groupAffiliation:'Marvel Knights',
      image:'../../assets/marvel/daredevil.jpg',
      video:'../../assets/marvel/daredevil.mp4',

    },
    {
      name:'Deadpool',
      fullName:' Wade Winston Wilson',
      firstAppearance:'The New Mutants Nº 98',
      groupAffiliation:'X-Men',
      image:'../../assets/marvel/deadpool.jpg',
      video:'../../assets/marvel/deadpool.mp4',

    },
    {
      name:'Dr Strange',
      fullName:' Stephen Strange',
      firstAppearance:'Strange Tales número 110 ',
      groupAffiliation:'Los Vengadores',
      image:'../../assets/marvel/drstrange.jpg',
      video:'../../assets/marvel/drstrange.mp4',

    },
    {
      name:'Duende Verde',
      fullName:'	Norman Osborn',
      firstAppearance:'	The Amazing Spider-Man #14',
      groupAffiliation:'',
      image:'../../assets/marvel/duendeverde.jpg',
      video:'../../assets/marvel/duendeverde.mp4',

    },
    {
      name:'Ghost Rider',
      fullName:'Johnny Blaze',
      firstAppearance:'Marvel Spotlight #5 ',
      groupAffiliation:'Thunderbolts',
      image:'../../assets/marvel/ghostrider.jpg',
      video:'../../assets/marvel/ghostrider.mp4',

    },
    {
      name:'Hulk',
      fullName:'Robert Bruce Banner',
      firstAppearance:' The Incredible Hulk #1',
      groupAffiliation:'Los Vengadores',
      image:'../../assets/marvel/hulk.jpg',
      video:'../../assets/marvel/hulk.mp4',

    },
    {
      name:'Iron Man',
      fullName:' Anthony Edward Stark',
      firstAppearance:' Tales of Suspense #39',
      groupAffiliation:'Los Vengadores',
      image:'../../assets/marvel/ironman.jpg',
      video:'../../assets/marvel/ironman.mp4',

    },
    {
      name:'SpiderMan(Miles Morales)',
      fullName:'Miles Morales',
      firstAppearance:'Ultimate Fallout #4',
      groupAffiliation:'',
      image:'../../assets/marvel/mylesmorales.jpg',
      video:'../../assets/marvel/mylesmorales.mp4',

    },
    {
      name:'SpiderMan',
      fullName:'Peter Parker',
      firstAppearance:'Amazing Fantasy #15',
      groupAffiliation:'Los Vengadores',
      image:'../../assets/marvel/spiderman.jpg',
      video:'../../assets/marvel/spiderman.mp4',

    },
    {
      name:'Thanos',
      fullName:' Thanos The Titan',
      firstAppearance:'Iron Man Vol. 1, #55 ',
      groupAffiliation:'Guardia del Infinito',
      image:'../../assets/marvel/thanos.jpg',
      video:'../../assets/marvel/thanos.mp4',

    },
    {
      name:'Thor',
      fullName:' Thor Odinson',
      firstAppearance:'Journey Into Mystery #83 ',
      groupAffiliation:'Los Vengadores',
      image:'../../assets/marvel/thor.jpg',
      video:'../../assets/marvel/thanos.mp4',

    },
    {
      name:'Venom',
      fullName:'',
      firstAppearance:'Marvel Super Heroes: Secret Wars #8',
      groupAffiliation:'',
      image:'../../assets/marvel/venom.jpg',
      video:'../../assets/marvel/venom.mp4',

    },
    {
      name:'Vision',
      fullName:'',
      firstAppearance:'Avengers #57',
      groupAffiliation:'Los Vengadores',
      image:'../../assets/marvel/vision.jpg',
      video:'../../assets/marvel/vision.mp4',

    },
    {
      name:'Wolverine',
      fullName:' James Logan',
      firstAppearance:'The Incredible Hulk #180 ',
      groupAffiliation:'X-Men',
      image:'../../assets/marvel/wolverine.jpg',
      video:'./../assets/marvel/wolverine.mp4',

    },
  ]
  constructor(private router: Router,) { }

  ngOnInit() {
  }

  gotoDC(){
    let navigationExtras: NavigationExtras = {
      state: {
        special: JSON.stringify(this.dc)
      }
    };
    console.log(navigationExtras)
    this.router.navigate(['heroes'], navigationExtras);
  }
  gotoMarvel(){
    let navigationExtras: NavigationExtras = {
      state: {
        special: JSON.stringify(this.marvel)
      }
    };
    console.log(navigationExtras)
    this.router.navigate(['heroes'], navigationExtras);
  }
}

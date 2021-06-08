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
      video:''

    },
    {
      name:'Aquaman',
      fullName:'Arthur Curry',
      firstAppearance:'More Fun Comics, #73 ',
      groupAffiliation:'Liga de la Justicia',
      image:'../../assets/dc/aquaman.jpg',
      video:''

    },
    {
      name:'Batgirl',
      fullName:'Barbara Gordon',
      firstAppearance:'Batman Nº 139',
      groupAffiliation:'',
      image:'../../assets/dc/batgirl.jpg',
      video:''

    },
    {
      name:'Batman',
      fullName:'Bruce Wayne ',
      firstAppearance:'Detective Comics N.º 27',
      groupAffiliation:'Liga de la Justicia',
      image:'../../assets/dc/batman.jpg',
      video:''

    },
    {
      name:'Cyborg',
      fullName:'Victor Stone',
      firstAppearance:'DC Comics Presents #26 ',
      groupAffiliation:'Liga de la Justicia',
      image:'../../assets/dc/cyborg.jpg',
      video:''

    },
    {
      name:'Darkseid',
      fullName:'',
      firstAppearance:'Superman Pal Jimmy Olsen #134',
      groupAffiliation:'Sociedad Secreta de Súper Villanos',
      image:'../../assets/dc/darksaid.jpg',
      video:''

    },
    {
      name:'Deathstroke',
      fullName:'Slade Joseph Wilson',
      firstAppearance:'The New Teen Titans (Vol. 1)N.º 2 ',
      groupAffiliation:'Escuadrón Suicida',
      image:'../../assets/dc/deathstroke.jpg',
      video:''

    },
    {
      name:'Detective Marciano',
      fullName:"J'onn J'onzz",
      firstAppearance:'Detective Comics N.º 225',
      groupAffiliation:'Liga de la Justicia',
      image:'../../assets/dc/detectivemarciano.jpg',
      video:''

    },
    {
      name:'Flash',
      fullName:'Barry Allen',
      firstAppearance:'Showcase #4',
      groupAffiliation:'Liga de la Justicia',
      image:'../../assets/dc/flash.jpg',
      video:''

    },
    {
      name:'Flecha verde',
      fullName:'Oliver Jonas Queen',
      firstAppearance:'More Fun Comics N°73 ',
      groupAffiliation:'Liga de la Justicia',
      image:'../../assets/dc/flechaverde.jpg',
      video:''

    },
    {
      name:'Gatubela',
      fullName:' Selina Kyle',
      firstAppearance:'Batman Nº 1',
      groupAffiliation:'Liga de la Justicia',
      image:'../../assets/dc/gatubela.jpg',
      video:''

    },
    {
      name:'Harley Quinn',
      fullName:'Harleen Frances Quinzel',
      firstAppearance:'Batman: la serie animada Episodio n°. 22:',
      groupAffiliation:'Escuadron Suicida',
      image:'../../assets/dc/harleyqueen.jpg',
      video:''

    },
    {
      name:'Hiedra Venenosa ',
      fullName:'Pamela Lilian Isley',
      firstAppearance:'Batman Nº 181',
      groupAffiliation:'Sociedad Secreta de Super Villanos',
      image:'../../assets/dc/hiedravenenosa.jpg',
      video:''

    },
    {
      name:'Joker',
      fullName:'',
      firstAppearance:'Batman Nº 1',
      groupAffiliation:'Escuadron Super',
      image:'../../assets/dc/joker.jpg',
      video:''

    },
    {
      name:'Linterna Verde',
      fullName:'Hal Jordan',
      firstAppearance:'Showcase #22',
      groupAffiliation:'Liga de la Justicia',
      image:'../../assets/dc/linternaverde.jpg',
      video:''

    },
    {
      name:'Pinguino',
      fullName:'Oswald Chesterfield Cobblepot',
      firstAppearance:'Detective Comics #58 ',
      groupAffiliation:'Liga de la injusticia',
      image:'../../assets/dc/pinguino.jpg',
      video:''

    },
    {
      name:'Robin',
      fullName:'Dick Grayson',
      firstAppearance:'Detective Comics #38 ',
      groupAffiliation:'Teen Titans',
      image:'../../assets/dc/robin.jpg',
      video:''

    },
    {
      name:'Shazam',
      fullName:'William Joseph "Billy" Batson',
      firstAppearance:'Whiz Comics #2 ',
      groupAffiliation:'Familia Marvel',
      image:'../../assets/dc/shazam.jpg',
      video:''

    },
    {
      name:'Supergirl',
      fullName:'Kara Zor-El',
      firstAppearance:' Action Comics N° 252',
      groupAffiliation:'',
      image:'../../assets/dc/supergirl.jpg',
      video:''

    },
    {
      name:'Superman',
      fullName:'Kal-EL',
      firstAppearance:'Action Comics #1 ',
      groupAffiliation:'Liga de la Justicia',
      image:'../../assets/dc/superman.jpg',
      video:''

    },
    {
      name:'Wonder Woman',
      fullName:' Diana de Temiscira',
      firstAppearance:'All Star Comics #8',
      groupAffiliation:'Liga de la Justicia',
      image:'../../assets/dc/wonderwoman.jpg',
      video:''

    },


  ];

  marvel = [
    {
      name:'AntMan',
      fullName:'Scott Lang',
      firstAppearance:'Tales to Astonish # 27 ',
      groupAffiliation:'Los Vengadores',
      image:'../../assets/marvel/antman.jpg',
      video:''

    },

    {
      name:'Black Panther',
      fullName:"T'Challa",
      firstAppearance:'The Fantastic Four N.º 52 ',
      groupAffiliation:'Los Vengadores',
      image:'../../assets/marvel/blackpanther.jpg',
      video:''

    },
    {
      name:'Capitan America',
      fullName:' Steven Grant Rogers',
      firstAppearance:' Captain America Comics #1',
      groupAffiliation:'Los Vengadores',
      image:'../../assets/marvel/capitanamerica.jpg',
      video:''

    },
    {
      name:'Daredevil',
      fullName:' Matthew Michael "Matt" Murdock',
      firstAppearance:' Daredevil #1',
      groupAffiliation:'Marvel Knights',
      image:'../../assets/marvel/daredevil.jpg',
      video:''

    },
    {
      name:'Deadpool',
      fullName:' Wade Winston Wilson',
      firstAppearance:'The New Mutants Nº 98',
      groupAffiliation:'X-Men',
      image:'../../assets/marvel/deadpool.jpg',
      video:''

    },
    {
      name:'Dr Strange',
      fullName:' Stephen Strange',
      firstAppearance:'Strange Tales número 110 ',
      groupAffiliation:'Los Vengadores',
      image:'../../assets/marvel/drstrange.jpg',
      video:''

    },
    {
      name:'Duende Verde',
      fullName:'	Norman Osborn',
      firstAppearance:'	The Amazing Spider-Man #14',
      groupAffiliation:'',
      image:'../../assets/marvel/duendeverde.jpg',
      video:''

    },
    {
      name:'Ghost Rider',
      fullName:'Johnny Blaze',
      firstAppearance:'Marvel Spotlight #5 ',
      groupAffiliation:'Thunderbolts',
      image:'../../assets/marvel/ghostrider.jpg',
      video:''

    },
    {
      name:'Hulk',
      fullName:'Robert Bruce Banner',
      firstAppearance:' The Incredible Hulk #1',
      groupAffiliation:'Los Vengadores',
      image:'../../assets/marvel/hulk.jpg',
      video:''

    },
    {
      name:'Iron Man',
      fullName:' Anthony Edward Stark',
      firstAppearance:' Tales of Suspense #39',
      groupAffiliation:'Los Vengadores',
      image:'../../assets/marvel/ironman.jpg',
      video:''

    },
    {
      name:'SpiderMan(Miles Morales)',
      fullName:'Miles Morales',
      firstAppearance:'Ultimate Fallout #4',
      groupAffiliation:'',
      image:'../../assets/marvel/mylesmorales.jpg',
      video:''

    },
    {
      name:'SpiderMan',
      fullName:'Peter Parker',
      firstAppearance:'Amazing Fantasy #15',
      groupAffiliation:'Los Vengadores',
      image:'../../assets/marvel/spiderman.jpg',
      video:''

    },
    {
      name:'Thanos',
      fullName:' Thanos The Titan',
      firstAppearance:'Iron Man Vol. 1, #55 ',
      groupAffiliation:'Guardia del Infinito',
      image:'../../assets/marvel/thanos.jpg',
      video:''

    },
    {
      name:'Thor',
      fullName:' Thor Odinson',
      firstAppearance:'Journey Into Mystery #83 ',
      groupAffiliation:'Los Vengadores',
      image:'../../assets/marvel/thor.jpg',
      video:''

    },
    {
      name:'Venom',
      fullName:'',
      firstAppearance:'Marvel Super Heroes: Secret Wars #8',
      groupAffiliation:'',
      image:'../../assets/marvel/venom.jpg',
      video:''

    },
    {
      name:'Vision',
      fullName:'',
      firstAppearance:'Avengers #57',
      groupAffiliation:'Los Vengadores',
      image:'../../assets/marvel/vision.jpg',
      video:''

    },
    {
      name:'Wolverine',
      fullName:' James Logan',
      firstAppearance:'The Incredible Hulk #180 ',
      groupAffiliation:'X-Men',
      image:'../../assets/marvel/wolverine.jpg',
      video:''

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

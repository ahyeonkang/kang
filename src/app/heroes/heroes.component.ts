import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
// import { Hero } from '../hero'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {


  // hero = "winstorm"
  // hero: Hero = {
  //   id: 11,
  //   name: 'Winstorm'
  // };
  hero: Hero;

  isSpecial = false;

  constructor() {
    this.hero = new Hero(11,'winstorm');
  }


  ngOnInit() {
  }

  onSave() {
    console.log('onSave')
  }

}

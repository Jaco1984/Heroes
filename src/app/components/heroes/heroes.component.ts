import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../app/servicios/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor(private _heroresService:HeroesService,
              private router: Router) { 
    console.log("constructor HeroesComponent");
  }

  ngOnInit() {
    this.heroes = this._heroresService.getHeroes();
    console.log(this.heroes);
  }

  getId(index:number){
    this.router.navigate(['/informacion-heroe', index]);
  }
 
}

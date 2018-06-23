import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../app/servicios/heroes.service';

@Component({
  selector: 'app-buscar-heroes',
  templateUrl: './buscar-heroes.component.html',
  styleUrls: ['./buscar-heroes.component.css']
})
export class BuscarHeroesComponent implements OnInit {
  
  heroes: any[] = [];
  termino: string;
  constructor(private activatedRoute: ActivatedRoute,
  private _heroesService: HeroesService) {

  this.activatedRoute.params.subscribe(params => {
  this.termino = params['termino'];
  this.heroes = this._heroesService.getBuscarHeroe(params['termino']);
  console.log("Heroes" + this.heroes);

   })
  }

  ngOnInit() {
  }

}

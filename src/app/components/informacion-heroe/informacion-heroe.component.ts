import { HeroesService } from './../../app/servicios/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-informacion-heroe',
  templateUrl: './informacion-heroe.component.html',
  styles: []
})
export class InformacionHeroeComponent implements OnInit {

  heroe:any = {};
  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService) {

    this.activatedRoute.params.subscribe(params => {
    this.heroe = this._heroesService.getIdHeroe(params['id']);
    console.log(this.heroe);
    })
   }

  ngOnInit() {
  }

}

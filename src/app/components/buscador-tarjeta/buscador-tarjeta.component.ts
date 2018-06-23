import { HeroesService } from './../../app/servicios/heroes.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-buscador-tarjeta',
  templateUrl: './buscador-tarjeta.component.html',
  styleUrls: ['./buscador-tarjeta.component.css']
})
export class BuscadorTarjetaComponent implements OnInit {
 @Input() heroe:any[] = [] ; 
 @Input() index:number;
 @Output() heroeSeleccionado: EventEmitter<number>;


  constructor(private router:Router){
    this.heroeSeleccionado = new EventEmitter();
  }
    
  ngOnInit() {
  }

  getId(){
    //this.heroeSeleccionado.emit(this.index);
    console.log("GetID");
    // console.log(this.index);
     this.router.navigate(['/informacion-heroe', this.index]);
  }

}

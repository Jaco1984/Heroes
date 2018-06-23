
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Servicios 
import { HeroesService } from './app/servicios/heroes.service';
//Rutas
import { APP_ROUTING } from './app.routes';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './app/components/shared/navbar/navbar.component';
import { HomeComponent } from './app/components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { InformacionHeroeComponent } from './components/informacion-heroe/informacion-heroe.component';
import { BuscarHeroesComponent } from './components/buscar-heroes/buscar-heroes.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { BuscadorTarjetaComponent } from './components/buscador-tarjeta/buscador-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    InformacionHeroeComponent,
    BuscarHeroesComponent,
    HeroeTarjetaComponent,
    BuscadorTarjetaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

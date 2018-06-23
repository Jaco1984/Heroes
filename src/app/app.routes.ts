import { BuscarHeroesComponent } from './components/buscar-heroes/buscar-heroes.component';
import { InformacionHeroeComponent } from './components/informacion-heroe/informacion-heroe.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './app/components/home/home.component';
import { RouterModule, Routes} from '@angular/router';

const APP_ROUTES: Routes = [
    {path :'home', component: HomeComponent},
    {path :'about', component: AboutComponent},
    {path :'heroes', component: HeroesComponent},
    {path :'informacion-heroe/:id', component: InformacionHeroeComponent},
    {path :'buscar-heroes/:termino', component: BuscarHeroesComponent},
    {path : '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true });
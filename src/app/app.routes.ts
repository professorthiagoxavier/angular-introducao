import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './components/about/about.component';
import { RotasComponent } from './components/rotas/rotas.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ClientDetailComponent } from './components/client-detail/client-detail.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { EstadosListComponent } from './components/ibge/estados-list/estados-list.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'first-component', component: FirstComponentComponent },
    { path: 'nova-rota', component: RotasComponent },
    { path: 'cliente', component: ClienteComponent },
    { path: 'cliente/:id', component: ClientDetailComponent },
    { path: 'pokemon', component: PokemonListComponent },
    { path: 'estados', component: EstadosListComponent },
    { path: '**', component: HomeComponent } /*Qualquer rota não encontrada será redirecionado para home */

];

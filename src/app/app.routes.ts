import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './components/about/about.component';
import { RotasComponent } from './components/rotas/rotas.component';
import { ClienteComponent } from './components/cliente/cliente.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'first-component', component: AboutComponent },
    {path :'nova-rota', component: RotasComponent},
    {path :'cliente', component: ClienteComponent},
    { path: '**', component: HomeComponent } /*Qualquer rota não encontrada será redirecionado para home */

];

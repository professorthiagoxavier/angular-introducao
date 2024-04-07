import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './components/about/about.component';
import { RotasComponent } from './components/rotas/rotas.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'first-component', component: AboutComponent },
    {path :'nova-rota', component: RotasComponent}
];

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component'; 
import { DirectivesComponent} from './components/directives/directives.component'; 
import {DirectiveIfComponent} from './components/directive-if/directive-if.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { PaiComponent } from './components/pai/pai.component';
import { ContadorPaiComponent } from './components/contador-pai/contador-pai.component';
import { ListarComponent } from './components/listar/listar.component';
import { OperadorPipeComponent } from './components/operador-pipe/operador-pipe.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { HomeComponent } from './home/home.component';
import { RotasComponent } from './components/rotas/rotas.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
   FirstComponentComponent,
    DirectivesComponent,
    DirectiveIfComponent,
    EventosComponent, 
    PaiComponent,
    ContadorPaiComponent,
    ListarComponent,
    OperadorPipeComponent,
  TwoWayBindingComponent,
  NavbarComponent,
  HomeComponent, RotasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Thiago';
}

import { Component } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {

  //Quando o componente é instanciado, o Angular injeta o serviço ClienteService
  constructor(private clienteService: ClienteService) { 

  }

  ngOnInit() {
    // this.clienteService.listar().subscribe((data) => {
    //   console.log(data);
    // });
  }

}

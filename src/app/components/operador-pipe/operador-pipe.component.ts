import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-operador-pipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './operador-pipe.component.html',
  styleUrl: './operador-pipe.component.css'
})
export class OperadorPipeComponent {

  // price:string = `${1.57.toFixed(2).replace('.', ',')}`;
  price:number = 1.60;
  text:string = 'Thiago';

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directive-if',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directive-if.component.html',
  styleUrl: './directive-if.component.css'
})
export class DirectiveIfComponent {

  mostrar: boolean = false;
  color: string = 'green';
  constructor() { }


}

import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-click-button-filho',
  standalone: true,
  imports: [],
  templateUrl: './click-button-filho.component.html',
  styleUrl: './click-button-filho.component.css'
})
export class ClickButtonFilhoComponent {
  @Output() contadorFilho: EventEmitter<any> = new EventEmitter();

  contadorEvento() :void{
    this.contadorFilho.emit();
  }
}
